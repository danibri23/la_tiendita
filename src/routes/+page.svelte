<script lang="ts">
	import { Card, Cart } from '../lib/components';
	import { Cartas } from '../utils/pedidos';
</script>

<main>
	{#each Cartas as carta}
		<Card
			id={carta.id}
			imgSrc={carta.img}
			altText={carta.nombre}
			message={carta.nombre}
			price={carta.precio}
		/>
	{/each}
	<Cart />
</main>
