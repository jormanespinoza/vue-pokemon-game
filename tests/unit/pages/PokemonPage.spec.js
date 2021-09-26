import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { mockedPokemos as pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage.vue', () => {

    let wrapper
    let spiedMixPokemons

    beforeEach(() => {
        spiedMixPokemons = jest.spyOn(PokemonPage.methods, 'mixPokemons')
        wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    correctAnswer: false,
                    answer: ''
                }
            }
        })
    })

    test('should call mixPokemons on mounting', () => {
        expect(spiedMixPokemons).toHaveBeenCalled()
    })

    test('shout match snapshot when loading pokemons', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should show PokemonPicture and PokemonOptions components', () => {
        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOptions = wrapper.find('pokemon-options-stub')

        expect(pokemonPicture.exists()).toBeTruthy()
        expect(pokemonOptions.exists()).toBeTruthy()
        expect(pokemonPicture.attributes('pokemonid')).toBe(`${pokemons[0].id}`)
        expect(pokemonOptions.attributes('pokemons')).toBeTruthy()
    })

    test('should checkAnswer', async () => {
        await wrapper.vm.checkAnswer(pokemons[0].id)

        expect(wrapper.find('.answer').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.answer).toBe(`Correct, ${pokemons[0].name}!`)

        await wrapper.vm.checkAnswer(pokemons[1].id)

        expect(wrapper.vm.answer).toBe(`Oops, it was ${pokemons[0].name}!`)
    })

    afterAll(() => {
        jest.resetAllMocks()
    })
})