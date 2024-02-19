export default class Model{
    constructor(){
        this.secretWord = '';
        this.letterIndex = [];
        this.currentChar = '';
    }
    tasks = new Map(
        [
            ['capital of Italy', 'Rome'],
            ['who wrote ‘ war and peace’' , 'Tolstoy'],
            ['what do koalas eat' , 'eucalyptus'],
            ['big russian cat', 'floppa'],
            ['yellow sour citrus' , 'lemon'],
            ['first month of spring?' , 'march'],
            ['a bird with edible eggs' , 'chicken'],
            ['which number consists 6 zeros in it' , 'million'],
            ['frozen water' ,'ice'],
            ['shortest month of the year' , 'february'],
        ]
    )

    keyboard = [
        'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'
    ]

    getRandom = () => {
        const arrayTasks = Array.from(this.tasks);
        let randomTask = Math.floor(Math.random() * arrayTasks.length);
        const randomCouple = arrayTasks[randomTask];
        this.secretWord = randomCouple[1];
        return randomCouple;
    }

    symbolChecker = (symbol) => {
        this.keyboard.forEach(char => {
            if (symbol === char){
                this.letterChecker(char);
            }
        })
    }

    letterChecker = (letter) => {
        this.clearLetterIndex()
        for(let i = 0; i < this.secretWord.length; i++){
            if(this.secretWord[i].toLowerCase() === letter){
                this.letterIndex.push(i);
                this.currentChar = letter;
            } 
        }
    }

    clearLetterIndex = () =>{
        if(this.letterIndex.length>0){
            this.letterIndex.splice(0,this.letterIndex.length)
        }
    }
}