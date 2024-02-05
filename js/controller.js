import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();


view.renderQuest(model.getRandom());
view.renderSecretWord(model.secretWord);
view.renderKey(model.keyboard)

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    model.symbolChecker(key)
})
