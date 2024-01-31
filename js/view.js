export default class View{
    constructor(){
        
    }
    
    elements = {
        question: document.querySelector('.question__title'),
        template: document.querySelector('.question__template'),
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
}