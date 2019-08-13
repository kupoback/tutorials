import './imports/_components';

const app = new Vue({
	el: "#app",
	data: {
		myLocalProperty: "I'm a local property value",
		randomNumber: 0
	},
	methods: {
		buttonClicked() {
			this.randomNumber = Math.floor(Math.random() * 100);
		}
	}
});

const app2 = new Vue({
	el: "#app-2",
	data: {
		games: [
			{
				name: 'Super Mario 64',
				console: 'Nintendo 64',
				rating: 8
			},
			{
				name: 'The Legend of Zelda Ocarina of Time',
				console: 'Nintendo 64',
				rating: 9
			},
			{
				name: 'Secret of Mana',
				console: 'Super Nintendo',
				rating: 8
			},
			{
				name: 'Fallout 76',
				console: 'Multiple',
				rating: 1
			},
			{
				name: 'Super Metroid',
				console: 'Super Nintendo',
				rating: 11
			}
		]
	}
});

const app3 = new Vue({
	el: '#app-3',

});

const app4 = new Vue({
	el: '#app-4',
	data: {
		people: [
			{
				name: 'Mario',
				age: 38
			},
			{
				name: 'Luigi',
				age: 38
			},
			{
				name: 'Samus',
				age: 31
			},
			{
				name: 'Link',
				age: 20
			},
			{
				name: 'Marina',
				age: 32
			},
		]
	}
});

const app5 = new Vue({
	el : '#app-5',
	data() {
		return {
			favouriteGame: null,
			response : ''
		}
	},
	watch : {
		favouriteGame(newValue, oldValue) {
			if (!newValue) return

          if (newValue.toLowerCase().indexOf('metroid') !== -1) {
            this.response = 'Ceres station is under attack!'
            return
          }

          if (newValue.toLowerCase().indexOf('zelda') !== -1) {
            this.response = 'Its dangerous to go alone, take this 🗡️'
            return
          }

          if (
            oldValue.toLowerCase().indexOf('metroid') !== -1 &&
            newValue.toLowerCase().indexOf('metroid') === -1
          ) {
            this.response = 'Nothing is true , everything is permitted'
            return
          }

          this.response = 'Sure, why not?'

		}
	}
});

export default {
	components: {
		awesomeButton,
		gameCard,
		ageCalculator
	}
}
