import "../style.css";

import { createElement } from "../utils";
import { PRODUCTS } from "../data/products";
import type { CartItem } from "../cart/types";
import {
  getItems,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  removeItem,
} from "../cart/cart";

let promoCode = "";
let promoApplied = false;
let promoMessage = "";

let sumText: HTMLElement;
let discountText: HTMLElement;
let totalText: HTMLElement;

const main = document.querySelector("main") as HTMLElement;
renderCart(main);

function renderCart(container: HTMLElement): void {
  container.replaceChildren();

  const items = getItems();

  // если корзина пустая
  if (items.length === 0) {
    const empty = createElement("div", undefined, "cart-empty");

    const text = createElement("p");
    text.textContent = "Корзина пуста";

    const total = createElement("p");
    total.textContent = "Итого: 0 $";

    empty.append(text, total);
    container.append(empty);
    return;
  }

  const cart = createElement("div", undefined, "cart");
  const list = createElement("div", undefined, "cart-list");

  for (const item of items) {
    list.append(createCartItem(item, container));
  }

  cart.append(list, createSummary(container));
  container.append(cart);
}

function createCartItem(item: CartItem, container: HTMLElement): HTMLElement {
  const product = PRODUCTS.find((p) => p.id === item.id);

  const row = createElement("div", undefined, "cart-item");

  // фото
  const photo = createElement("div", undefined, "cart-photo");
  if (product?.imageUrl) {
    const img = createElement("img") as HTMLImageElement;
    img.src = product.imageUrl;
    img.alt = item.name;
    photo.append(img);
  } else {
    photo.textContent = "Фото";
  }

  // название и описание
  const info = createElement("div", undefined, "cart-info");

  const name = createElement("div", undefined, "cart-name");
  name.textContent = item.name;

  const description = createElement("div", undefined, "cart-description");
  description.textContent = product?.description ?? "";

  info.append(name, description);

  // количество
  const quantity = createElement("div", undefined, "cart-quantity");

  const minus = createElement("button");
  minus.textContent = "−";

  const count = createElement("span");
  count.textContent = String(item.quantity);

  const plus = createElement("button");
  plus.textContent = "+";

  quantity.append(minus, count, plus);

  // цена за строку
  const price = createElement("div", undefined, "cart-price");
  price.textContent = `${item.price * item.quantity} $`;

  // кнопка удаления
  const remove = createElement("button", undefined, "cart-remove");
  remove.textContent = "✕";

  // обновляем в строке количество и цену, и итог справа
  const update = (): void => {
    const current = getItems().find((i) => i.id === item.id);
    if (!current) return;

    count.textContent = String(current.quantity);
    price.textContent = `${current.price * current.quantity} $`;
    updateSummary();
  };

  minus.addEventListener("click", () => {
    decreaseQuantity(item.id);
    update();
  });

  plus.addEventListener("click", () => {
    increaseQuantity(item.id);
    update();
  });

  remove.addEventListener("click", () => {
    removeItem(item.id);

    if (getItems().length === 0) {
      renderCart(container);
    } else {
      row.remove();
      updateSummary();
    }
  });

  row.append(photo, info, quantity, price, remove);
  return row;
}

// правый блок
function createSummary(container: HTMLElement): HTMLElement {
  const summary = createElement("aside", undefined, "cart-summary");

  // промокод
  const promo = createElement("div", undefined, "cart-promo");

  const input = createElement("input", "promo-input") as HTMLInputElement;
  input.type = "text";
  input.placeholder = "Промокод SALE10";
  input.value = promoCode;

  const promoButton = createElement("button");
  promoButton.textContent = "Применить";

  promo.append(input, promoButton);

  const message = createElement("p", undefined, "cart-promo-message");
  message.textContent = promoMessage;

  promoButton.addEventListener("click", () => {
    promoCode = input.value.trim();

    if (promoCode === "SALE10") {
      promoApplied = true;
      promoMessage = "Промокод применён";
    } else {
      promoApplied = false;
      promoMessage = "Такого промокода нет";
    }

    message.textContent = promoMessage;
    updateSummary();
  });

  // суммы
  sumText = createElement("p");
  discountText = createElement("p");
  totalText = createElement("p", undefined, "cart-total");

  // кнопка «Купить»
  const buy = createElement("button", "buy-button", "cart-buy");
  buy.textContent = "Купить";
  buy.addEventListener("click", () => {
    alert("Спасибо за покупку!");
    clearCart();
    promoCode = "";
    promoApplied = false;
    promoMessage = "";
    renderCart(container);
  });

  summary.append(promo, message, sumText, discountText, totalText, buy);

  updateSummary();
  return summary;
}

function updateSummary(): void {
  let total = 0;
  for (const item of getItems()) {
    total += item.price * item.quantity;
  }

  const discount = promoApplied ? Math.round(total * 0.1) : 0;

  sumText.textContent = `Сумма: ${total} $`;
  discountText.textContent = `Скидка: −${discount} $`;
  discountText.hidden = discount === 0; // без скидки строку прячем
  totalText.textContent = `Итого: ${total - discount} $`;
}
