import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();


view.renderQuest(model.getRandom());
view.renderSecretWord(model.secretWord);
view.renderKey(model.keyboard)

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    model.symbolChecker(key);
    if(model.letterIndex.length > 0){
        view.renderLetter(model.letterIndex, model.currentChar)
    }
})
// функция рендера вызывается каждый раз при нажатии на кнопку, но со старым значением
// решение: брать данные с конустркутора модели или написать условие для вызова рендера