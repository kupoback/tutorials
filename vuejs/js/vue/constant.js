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
	el : '#app-3',
	
});

const app4 = new Vue({
	el: '#app-4'
});

export default {
	components : {
		awesomeButton,
		gameCard,
		ageCalculator
	}
}