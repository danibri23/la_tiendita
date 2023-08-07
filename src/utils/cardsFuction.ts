import type { CartItem } from '$lib/interfaces/cartItem';
import type { Product } from '$lib/interfaces/product';

// funcion de anhadir al carrito
export const addToCart = (product: Product, cartsItems: CartItem[]) => {
	console.log(product);
	// aca obtenemos el array para poder accerder a sus elementos

	// para saber si el item ya esta en el carrito
	let itemPosition = cartsItems.findIndex((item) => {
		return item.id === product.id;
	});

	if (itemPosition !== -1) {
		// primera opcion que el Item ya este en nuestra carrito, tenemos que agregarle una cantidad

		let updateItems = cartsItems.map((item) => {
			if (item.id === product.id) {
				return { ...item, quantity: item.quantity + 1 };
			}
			return item;
		});

		return updateItems;
	} else {
		// segunda opcion que el Item no este en nuestra carrito, tenemos que agregar el objeto al carro

		let cartItem: CartItem = {
			id: product.id,
			quantity: 1,
			name: product.nombre,
			price: product.precio
		};
		return [...cartsItems, cartItem];
	}
};

// funcion borrar del carrito
// export const removeFromCart = (id: string) => {
// 	// aca obtenemos el array para poder accerder a sus elementos
// 	let items = get(cartItems);

// 	// para saber si el item ya esta en el carrito
// 	let itemPosition = items.findIndex((item) => {
// 		return item.id === id;
// 	});

// 	if (items[itemPosition]?.quantity - 1 === 0) {
// 		items.splice(itemPosition, 1);
// 	}

// 	cartItems.update(() => {
// 		let updateItems = items.map((item) => {
// 			if (item.id === id) {
// 				return { ...item, quantity: item.quantity - 1 };
// 			}
// 			return item;
// 		});

// 		return updateItems;
// 	});
// };
