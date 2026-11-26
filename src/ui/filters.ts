import { CATEGORIES } from "../data/products.ts";
import { createElement } from "../utils.ts";

const main = document.querySelector('.main');


const filters = createElement('div', '', 'filters');
const selectCategory = createElement('select', 'category', '')

main?.append(filters);
const options = CATEGORIES.map((category) => {
  const option = createElement('option', '', '')
  option.setAttribute('value', category.toLowerCase());
  option.textContent = category;
  return option;
})

selectCategory.append(...options)

const search = createElement('input', 'search', '') as HTMLInputElement;
search.type = 'search';
search.placeholder = 'search by name';


const range = createElement('input', 'range', '') as HTMLInputElement;
range.type = 'range'


filters.append(selectCategory, search, range);