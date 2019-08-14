<section id="app" class="container mb-5">
	<div class="row justify-content-center">
		<div class="col-12 mb-3">
			<h2>Randomness!</h2>
		</div>
		<div class="col-md-6">
			<div class="mb-3">
				<p>My local property: {{ myLocalProperty }}</p>
			</div>
		</div>
		<div class="col-md-6">
			<div class="mb-3">
				<p v-if="randomNumber >= 50">randomNumber is >= 50!</p>
				<p v-else>Sorry, randomNumber is only {{ randomNumber }}</p>
			</div>
			<div class="mb-3">
				<button @click="buttonClicked" class="btn btn-primary">Click me to randomize</button>
			</div>
		</div>
	</div>
	<hr class="mt-5 mb-5">
</section>

<section id="app-2" class="container mb-5">
	<div class="row justify-content-between">
		<div class="col-12 mb-3">
			<h2>Games!</h2>
		</div>
		<div class="col-md-5" v-for="game in games" :key="game.name">
			<game-card :game-data="game"></game-card>
		</div>
	</div>
	<hr class="mt-5 mb-5">
</section>

<section id="app-3" class="container mb-5">
	<div class="row justify-content-center">
		<div class="col-12 mb-5">
			<h2>Alert!</h2>
		</div>
		<div class="col-12">
			<div class="mb-3">
				<p>Awesome Button</p>
			</div>
			<div class="mb-3">
				<awesome-button></awesome-button>
			</div>
		</div>
	</div>
	<hr class="mt-5 mb-5">
</section>

<section id="app-4" class="container mb-5">
	<div class="row justify-content-center">
		<div class="col-12 mb-5">
			<h2>People</h2>
		</div>
		<div class="col-12">
			<age-calculator v-for="person in people" :key="person.name" :person="person"></age-calculator>
		</div>
	</div>
	<hr class="mt-5 mb-5">
</section>

<section id="app-5" class="container mb-5">
	<div class="row">
		<div class="col-12 mb-3">
			<h2>Forms!</h2>
		</div>
		<div class="col-12 col-md-4 mb-3">
			<div class="form-group">
				<label for="game_input">What's your favourite game ever?</label>
				<input type="text" class="form-control" id="game_input" name="game_input" v-model="favouriteGame" />
				<small id="game_input_help" class="form-text text-muted">Type in your favourite game.</small>
			</div>
		</div>
		<hr class="mb-3 col-12">
		<div class="col-12 col-md-4 mb-3">
			<p>{{ response }}</p>
		</div>
	</div>
</section>

<template id="" class="container mb-5 hidden">
	<div class="row justify-content-center">
		<div class="col-md-6">
		</div>
	</div>
	<hr class="mt-5 mb-5">
</template>
