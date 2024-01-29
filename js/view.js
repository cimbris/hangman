export default class View{
    constructor(){
        
    }
    
    elements = {
        question: document.querySelector('.question__title'),
    }

    renderQuest = (randomCouple) => {
        this.elements.question.innerText = randomCouple[0];
    }
}