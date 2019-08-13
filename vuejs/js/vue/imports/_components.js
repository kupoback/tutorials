const awesomeButton = Vue.component('awesome-button', {
	template: `<button @click="clickHandler" class="btn btn-primary">Click me for some awesomeness</button>`,
	methods: {
		clickHandler() {
			alert('It\'s actually YOU!');
		}
	}
});

const gameCard = Vue.component('game-card', {
    props: ['gameData'],
    data() {
        return {
          game: {...this.gameData}
        }
      },
    template: `
    <div class="card mb-4">
        <div class="card-header"><b>Console</b>: {{gameData.console}}</div>
            <div class="card-body">
                <h4 class="mb-3 class-title">{{ gameData.name }}</small></h4>
                <p class="class-text rating"><b>Rating</b>: <b>{{gameData.rating}}/10</b> <span v-for="star in gameData.rating">&hearts;</span></p>
                <div class="col-xs-12 mb-3">
                    <button @click="increaseRating(gameData)" class="btn btn-primary">
                        <span v-if="gameData.rating > 7">Love it</span>
                        <span v-else>Like It</span>
                    </button>
                    <button @click="decreaseRating(gameData)" class="btn btn-primary btn-danger">
                        <span v-if="gameData.rating > 3">Dislike it</span>
                        <span v-else>HATE It</span>
                    </button>
                </div>
                <p class="class-text" v-if="gameData.rating > 10">This games <b>AMAZING</b>!</p>
                <p class="class-text" v-else-if="gameData.rating > 8">Wow, this game must be <b>really</b> good!</p>
                <p class="class-text" v-else-if="gameData.rating < 3">Wow this game must be <b>REALLY</b> bad</p>
                <p class="class-text" v-else>This gameData's not bad. Least it's not <b>Fallout 76</b>!</p>
            </div>
        </div>
    </div>`,
	methods: {
		increaseRating(game) {
            game.rating <= 10 ? game.rating++ : null;
		},
		decreaseRating(game) {
			game.rating > 1 ? game.rating-- : null;
		}
	}
})

const ageCalculator = Vue.component('age-calculator', {
    props: {
        person: {
          type: Object,
          required: true
        }
    },
    template : `
    <p>{{person.name}} has been kicking butt for {{daysAlive}} days!</p>
    `,
    computed: {
        daysAlive() {
            return this.person.age * 365
        }
    },
})

export default {
    awesomeButton,
    gameCard,
    ageCalculator
}
