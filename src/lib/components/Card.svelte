<script>
	export let imgSrc = '';
	export let altText = '';
	export let message = '';
	export let price = '';
	export let id = '';
</script>

<section>
	<!-- contenedor de las cartas -->
	<div class="grid grid-cols-auto-140 lg:grid-cols-auto-240 gap-6 place-content-center m-4">
		<!-- empieza la card  -->
		<div class="border border-1 flex justify-center flex-col">
			<div class="lg:w-60 w-[140px] mb-4">
				<img class="w-[140px] h-[140px]" src={imgSrc} alt={altText} />
			</div>
			<div class="mb-0">
				<p class="text-center">{message}</p>
				<p class="text-center">{price}$</p>
			</div>
			<button {id} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Agregar
			</button>
		</div>
	</div>
</section>
