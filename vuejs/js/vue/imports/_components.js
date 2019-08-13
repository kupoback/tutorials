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
                    <button @click="increaseRating" class="btn btn-primary">
                        <span v-if="gameData.rating > 7">Love it</span>
                        <span v-else>Like It</span>
                    </button>
                    <button @click="decreaseRating" class="btn btn-primary btn-danger">
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
		increaseRating() {
            this.game.rating <= 10 ? this.game.rating++ : null;
		},
		decreaseRating() {
			this.game.rating > 1 ? this.game.rating-- : null;
		}
	}
})

const ageCalculator = Vue.component('age-calculator', {
    template : `
    <p>NAME has been kicking butt for X days!</p>
    `
})

export default {
    awesomeButton,
    gameCard,
    ageCalculator
}
