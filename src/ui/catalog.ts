import { PRODUCTS } from "../data/products.ts";
import { createElement } from "../utils.ts";

const main = document.querySelector('.main');

const products = createElement('ul', '', 'products');
main?.append(products);
const prodList = PRODUCTS.map((product) => {
  const item = createElement('li', product.id.toString(), 'products__item');
  const img = createElement('img', '', 'products__img') as HTMLImageElement;
  img.src = product.imageUrl;
  img.alt =  product.name;
  const title = createElement('h3', '', 'products__title');
  title.textContent = product.name;
  const price = createElement('span', '', 'products__price');
  price.textContent = product.price.toString();
  const button = createElement('button', 'add-cart', 'products__btn')
  button.textContent = 'add to cart';
  button.addEventListener('click', () => {});
  item.append(img, title, price, button);
  return item;
})


products.append(...prodList)







