export default class View{
    constructor(){
    }
    
    elements = {
        question: document.querySelector('.question__title'),
        template: document.querySelector('.question__template'),
        keyboard: document.querySelector('.keyboard')
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

    // 1. значение кнопки
    // 2.проверить наличие символа в массиве

    

}