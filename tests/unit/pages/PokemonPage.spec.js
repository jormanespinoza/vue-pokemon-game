import { shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

describe('PokemonPage.vue', () => {

    test('should match snapshot', () => {
        const wrapper = shallowMount(PokemonPage)

        expect(wrapper.html()).toMatchSnapshot()
    })
})