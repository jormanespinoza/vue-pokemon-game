import { capitalize } from '@vue/shared'
import pokemonApi from '../api/pokemonApi'

const pokemonWithSvgAvailableLength = 650

const getPokemons = () => {
    return Array.from(Array(pokemonWithSvgAvailableLength)).map((_, index) => index + 1)
}

const getPokemonNames = async (pokemons = []) => {
    const promises = pokemons.map(pokemonId => pokemonApi.get(`/${pokemonId}`))
    const responses = await Promise.all(promises)

    return responses.map(response => ({
        id: response.data.id,
        name: capitalize(response.data.name)
    }))
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    return await getPokemonNames(mixedPokemons.splice(0, 4))
}

export default getPokemonOptions