<script lang="ts">
	import { cartItems } from '../../stores/Cart';
	import { addToCart } from '../../utils/cardsFuction';

	import { Data } from '../../utils/pedidos';
	let items = $cartItems;
</script>

<section>
	<!-- contenedor de las cartas -->
	<div class="grid grid-cols-auto-140 lg:grid-cols-auto-240 gap-6 place-content-center m-4">
		<!-- empieza la card  -->
		{#each Data as product}
			<div class="border border-1 flex justify-center flex-col">
				<div class="w-[140px] mb-4">
					<img class="w-[140px] h-[140px]" src={product.img} alt={product.nombre} />
				</div>
				<div class="mb-0">
					<p class="text-center">{product.nombre}</p>
					<p class="text-center">{product.precio}$</p>
				</div>
				<button
					on:click={() => {
						$cartItems = addToCart(product, items);
					}}
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Agregar
				</button>
			</div>
		{/each}
	</div>
</section>
