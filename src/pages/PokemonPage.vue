<template>
  <span v-if="!pokemon">Looking for a pokemon, please wait...</span>

  <div v-else>
    <h1>Who is this pokemon?</h1>

    <PokemonPicture 
      :pokemon-id="pokemon.id"
      :show-pokemon="showPokemon"
    />

    <PokemonOptions
      :pokemons="pokemons"
      @pokemon-selected="checkAnswer($event)"
    />

    <template v-if="showAnswer">
      <span 
        class="fade-in answer" 
        :class="correctAnswer ? 'correct' : 'wrong'"
      >
        {{ answer }}
      </span>
      <button @click="newGame">New game</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      correctAnswer: false,
      answer: ''
    }
  },
  methods: {
    async mixPokemons() {
      this.pokemons = await getPokemonOptions()
      this.pokemon = this.pokemons[Math.floor(Math.random() * 4)];
    },
    checkAnswer(pokemonSelectedId) {
      this.showPokemon = true
      this.answer = (this.pokemon.id === pokemonSelectedId)
        ? `Correct, ${this.pokemon.name}!`
        : `Oops, it was ${this.pokemon.name}!`
      this.correctAnswer = this.pokemon.id === pokemonSelectedId
      this.showAnswer = true
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.mixPokemons()
    }
  },
  mounted() {
    this.mixPokemons()
  }
}
</script>

<style scope>
.answer {
  display: block;
  font-weight: bold;
}

.answer.correct {
  color: #2d649b;
}

.answer.wrong {
  color: #da4f4f;
}

button {
  margin-top: 15px;
}
</style>