import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();


view.renderQuest(model.getRandom());
view.renderSecretWord(model.secretWord);
view.renderKey(model.keyboard)

const getVallueKey = (key) => {
    model.symbolChecker(key);
    if(model.letterIndex.length > 0){
        view.renderLetter(model.letterIndex, model.currentChar)
    }
    view.mistakesCounter(model.counter);

        if(model.isDefeat){
            view.resultPic(false);
            model.isDefeat = false;
        }
    
        if(model.isVictory){
            view.resultPic(true);
            model.isVictory = false;
        }
    view.marker(model.usedButtons);
}

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    getVallueKey(key);
})

view.elements.keyboard.addEventListener('click', (event) =>{
    if(event.target.closest('.keyboard__btn')){
        const key = event.target.innerText.toLowerCase();
        getVallueKey(key);
    }
})


