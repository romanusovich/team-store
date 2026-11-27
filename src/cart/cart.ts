import type { Product } from '../data/products';
import type { CartItem } from './types';

const CART_KEY = 'team_cart';
let cart: CartItem[] = [];
loadCart();

export function loadCart(): void {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

export function saveCart(): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}


export function getItems(): CartItem[] {
    return cart;
}

// Функция добавления товара в корзину
// Понадобится на странице каталога
// addEventListener для кнопки добавления в корзину
export function addItem(item: Product): void {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
    }
    saveCart();
}

export function removeItem(itemId: number): void {
    cart = cart.filter(cartItem => cartItem.id !== itemId);
    saveCart();
}

export function clearCart(): void {
    cart = [];
    saveCart();
}

export function increaseQuantity(itemId: number): void {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    }
    saveCart();
}

export function decreaseQuantity(itemId: number): void {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        }
    }
    saveCart();
}