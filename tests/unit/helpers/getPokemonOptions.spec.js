import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

import { mockedPokemos } from '../mocks/pokemons.mock'

describe('getPokemonOptions helpers', () => {
    test('getPokemons should return an array with numbers', () => {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        pokemons.forEach((pokemonNumber, index) => expect(pokemonNumber).toBe(++index))
    })

    test('getPokemonNames should return an array of four elements', async () => {
        const actualPokemons = await getPokemonNames([1, 2, 3, 4])

        expect(actualPokemons.length).toBe(4)
        expect(mockedPokemos).toStrictEqual(actualPokemons)
        mockedPokemos.forEach((pokemon, index) => {
            expect(pokemon).toStrictEqual(actualPokemons[index])
            expect(pokemon.id).toStrictEqual(actualPokemons[index].id)
            expect(pokemon.name).toStrictEqual(actualPokemons[index].name)
        })
    })

    test('getPokemonOptions should return a mixed array of four elements', async () => {
        const actualMixedPokemons = await getPokemonOptions()

        expect(actualMixedPokemons.length).toBe(4)
        expect(actualMixedPokemons).toEqual([
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            }
        ])
    })
})