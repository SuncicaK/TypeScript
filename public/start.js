import { Sell } from './classes/Sell.js';
import { Buy } from './classes/Buy.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item');
//inputs
const type = document.querySelector('#type'); //inputs
const productName = document.querySelector('#product-name');
const price = document.querySelector('#price');
const description = document.querySelector('#description');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//adding Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'buy') {
        doc = new Buy(productName.value, price.valueAsNumber, description.value);
    }
    else {
        doc = new Sell(productName.value, price.valueAsNumber, description.value);
    }
    console.log(type.value, productName.value, price.valueAsNumber, description.value);
    list.render(doc, type.value, 'end');
});
