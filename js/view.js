export default class View{
    constructor(){
    }
    
    elements = {
        question: document.querySelector('.question__title'),
        template: document.querySelector('.question__template'),
        keyboard: document.querySelector('.keyboard'),
        letterItems: null, 
        place: document.querySelector('#place'),
        usedBtn: null,
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

    mistakesCounter = (number) => {
        this.elements.place.innerText = number;        
    }

    marker = (usedButtons) => {
        this.elements.usedBtn = document.querySelectorAll('.keyboard__btn')
        for(let i = 0; i< this.elements.usedBtn.length; i++){
            let valueBtn = this.elements.usedBtn[i].innerText.toLowerCase();
            if(usedButtons.indexOf(valueBtn) !== -1){
                this.elements.usedBtn[i].classList.add('keyboard__btn--pressed')
            }
        }
    }

    resultPic = (status) => {
        let resultTitle;
        let resultImg;
        status ? resultTitle = 'you won' : resultTitle = 'you lost';
        status ?  resultImg = './img/pics/win_pic.jpg' : resultImg = './img/pics/viselica.png';
        const result =
        `
        <section class="result">
                <p class="result__title">${resultTitle}</p>
                <div class="result__pic">
                    <img src="${resultImg}" alt="">
                </div>
                <button class="replay-btn">play again</button>
            </section>
        `
        document.body.insertAdjacentHTML('beforeend', result);
    }
}