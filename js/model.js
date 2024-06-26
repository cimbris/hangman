export default class Model{
    constructor(){
        this.secretWord = '';
        this.currentChar = '';
        this.letterIndex = [];
        this.guessedLetters = [];
        this.isDefeat = false;
        this.isVictory = false;
        this.isPlaying = true;
        this.counter = 0;
        this.currentSound = null;
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
    
    usedButtons = []

    loserParts = [
        {
            name: 'head',
            xPos: 220,
            yPos: 170,
            width: 50,
            height: 50,
        },
        {
            name: 'body',
            xPos: 200,
            yPos: 205,
            width: 70,
            height: 50,
        },
        {
            name: 'right_hand',
            xPos: 263,
            yPos: 205,
            width: 40,
            height: 40,
        },
        {
            name: 'left_hand',
            xPos: 180,
            yPos: 205,
            width: 60,
            height: 40,
        },
        {
            name: 'right_leg',
            xPos: 200,
            yPos: 250,
            width: 40,
            height: 50,
        },
        {
            name: 'left_leg',
            xPos: 230,
            yPos: 250,
            width: 40,
            height: 50,
        },
    ]

    sounds = {
        click: 'click',
        hit: 'hit',
        lose: 'lose',
        miss: 'miss',
        win: 'win',
    }

    getRandom = () => {
        const arrayTasks = Array.from(this.tasks);
        let randomTask = Math.floor(Math.random() * arrayTasks.length);
        const randomCouple = arrayTasks[randomTask];
        this.secretWord = randomCouple[1];
        return randomCouple;
    }

    symbolChecker = (symbol) => {
        if(this.isPlaying){
            this.keyboard.forEach(char => {
                if (symbol === char && this.usedButtons.indexOf(symbol) === -1){
                    this.usedButtons.push(symbol);
                    this.letterChecker(char);
                    this.increaseCounter(symbol);
                }
            })
        }
    }

    letterChecker = (letter) => {
        this.clearLetterIndex()
        for(let i = 0; i < this.secretWord.length; i++){
            if(this.secretWord[i].toLowerCase() === letter){
                this.guessedLetters.push(i);
                this.letterIndex.push(i);
                this.currentSound = this.sounds.hit;
                this.currentChar = letter;
            }
        }
        this.victoryCheck();
    }

    victoryCheck = () => {
        if(this.guessedLetters.length === this.secretWord.length){
            this.isVictory = true;
            this.isPlaying = false;
        }
    }

    clearLetterIndex = () =>{
        if(this.letterIndex.length>0){
            this.letterIndex.splice(0,this.letterIndex.length)
        }
    }

    increaseCounter = (key) => {
        if(this.counter < 6 && this.isDefeat === false){
            if(this.secretWord.toLowerCase().indexOf(key.toLowerCase()) === -1){
                this.counter++;
                this.currentSound = this.sounds.miss;
            }
            if(this.counter === 6){
                this.isDefeat = true;
                this.isPlaying = false;
            }
        }
    }

    restart = () => {
        this.letterIndex = [];
        this.guessedLetters = [];
        this.isDefeat = false;
        this.isVictory = false;
        this.isPlaying = true;
        this.counter = 0;
        this.currentSound = null;
        this.usedButtons = []


        // this.getRandom();
        this.clearLetterIndex();
    }
}
// обнулить переменные , запустить рандомайзер запустить clearLetterIndex