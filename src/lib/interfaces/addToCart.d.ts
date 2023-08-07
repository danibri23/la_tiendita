// interface MathOperation {
// 	(a: number, b: number): number;
// }

// const addNumbers: MathOperation = (a, b) => a + b;

export interface addToCart {
	(product: Product, cartsItems: CartItem[]): CartItem[];
}
