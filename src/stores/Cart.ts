// importamos el tipado
import type { CartItem } from '../lib/interfaces/cartItem';

// Contendido reactiva
import { writable } from 'svelte/store';

// esto nos devuelve un array asi, que es escrito, y no un valor:
// [{id: "1", quantity: 4}, {id: "2", quantity: 2}]
export const cartItems = writable<CartItem[]>([]);
