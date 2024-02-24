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
    };
    model.increaseCounter(key)
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

