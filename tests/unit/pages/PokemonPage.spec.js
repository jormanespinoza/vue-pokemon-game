import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

describe('PokemonPage.vue', () => {

    let wrapper
    let spiedMixPokemons

    beforeEach(() => {
        spiedMixPokemons = jest.spyOn(PokemonPage.methods, 'mixPokemons')
        wrapper = shallowMount(PokemonPage)
    })

    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should call mixPokemons on mounting', () => {
        expect(spiedMixPokemons).toHaveBeenCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})