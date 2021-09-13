<template>
  <div class="options-container">
    <ul>
      <li
        v-for="{ id, name, answer = '' } in pokemons"
        :key="id"
        :class="answer"
        @click="$emit('pokemonSelected', id)"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scope>
/* Pokemon Options */
.options-container {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

li.correct {
  background-color: #2d649b;
  color: #fff;
}

li.wrong {
  background-color: #da4f4f;
  color: #fff;
}
</style>