import { capitalize } from '@vue/shared'
import pokemonApi from '../api/pokemonApi'

export const getPokemons = () => {
    const pokemonWithSvgAvailableLength = 650
    return Array.from(Array(pokemonWithSvgAvailableLength)).map((_, index) => index + 1)
}

export const getPokemonNames = async (pokemons = []) => {
    const promises = pokemons.map(pokemonId => pokemonApi.get(`/${pokemonId}`))
    const responses = await Promise.all(promises)

    return responses.map(({data}) => ({
        id: data.id,
        name: capitalize(data.name)
    }))
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    return await getPokemonNames(mixedPokemons.splice(0, 4))
}

export default getPokemonOptions