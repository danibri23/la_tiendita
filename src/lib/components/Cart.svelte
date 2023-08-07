<script lang="ts">
	import { cartItems } from '../../stores/Cart';
	$: console.log($cartItems);
</script>

<div>
	<h1 class="bg-red-200">Agregar al carrito</h1>

	<div class="flex">
		<p class="mr-10">Nombre</p>
		<p class="mr-10">Cantidad</p>
		<p class="mr-10">Total</p>
	</div>
	{#each $cartItems as item}
		<div class="flex">
			<p class="mr-16">{item.name}</p>
			<button class="mr-4">-</button>
			<p class="mr-4">{item.quantity}</p>
			<button class="mr-12">+</button>
			<p class="mr-10">5000</p>
			<button>x</button>
		</div>
	{/each}
</div>
