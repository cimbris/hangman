import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();

view.renderQuest(model.getRandom());
view.renderSecretWord(model.secretWord);
view.renderKey(model.keyboard);

const getVallueKey = (key) => {
    model.symbolChecker(key);
    if(model.letterIndex.length > 0){
        view.renderLetter(model.letterIndex, model.currentChar)
    }
    // view.player(model.currentSound)
    view.mistakesCounter(model.counter);

    if(model.counter > 0){
        view.renderLoser(model.loserParts[model.counter - 1])
    }

    if(model.isDefeat){
        view.player(model.sounds.lose)
        view.resultPic(false);
        model.isDefeat = false;

        const restartBtn = document.querySelector('#restart');
        restartBtn.addEventListener('click', () => {
            restart()
        })
    }

    if(model.isVictory){
        view.player(model.sounds.win)
        view.resultPic(true);
        model.isVictory = false;
        
        const restartBtn = document.querySelector('#restart');
        restartBtn.addEventListener('click', () => {
            restart()
        })
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

const restart = () => {
    model.restart();
    view.renderQuest(model.getRandom());
    view.clearKeyboard();
    view.clearSecretWord();
    view.renderSecretWord(model.secretWord);
    const okno = document.querySelector('.result').remove();
    view.mistakesCounter(model.counter);
    view.clearCanvas();
}



