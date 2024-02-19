export default class View{
    constructor(){
    }
    
    elements = {
        question: document.querySelector('.question__title'),
        template: document.querySelector('.question__template'),
        keyboard: document.querySelector('.keyboard'),
        letterItems: null, 
    }

    renderQuest = (randomCouple) => {
        this.elements.question.innerText = randomCouple[0];
    }

    renderSecretWord = (secretWord) => {
        for (let i = 0; i <= secretWord.length - 1; i++){
            const template = `
            <li class="question__item"> _ </li>
            `
            this.elements.template.insertAdjacentHTML('afterbegin', template)
        }
    }

    renderKey = (keyboardArray) => {
        for (let i = 0; i < keyboardArray.length; i++){
            const key = `
                <li class="keyboard__item"><button class="keyboard__btn">${keyboardArray[i].toUpperCase()}</button></li>
                `
            this.elements.keyboard.insertAdjacentHTML('beforeend', key)
        } 
    }

    renderLetter = (arrayIndex, currentChar) => {
        this.elements.letterItems = document.querySelectorAll('.question__item');
        for(let i = 0; i < this.elements.letterItems.length; i++){
            for(let w = 0; w < arrayIndex.length; w++){
                if(i === arrayIndex[w]){
                    this.elements.letterItems[i].innerText = currentChar;
                }
            }
        }
    }
}