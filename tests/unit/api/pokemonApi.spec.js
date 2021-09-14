import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
    test('axios should be configured with pokemon Api', () => {
        const { baseURL } = pokemonApi.defaults

        expect(baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})