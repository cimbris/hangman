import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();

view.renderQuest(model.getRandom())