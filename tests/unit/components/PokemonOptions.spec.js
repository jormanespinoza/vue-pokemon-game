import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { mockedPokemos } from '../mocks/pokemons.mock'

describe('PokemonOptions.vue', () => {
    let wrapper
    let pokemonOptions

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockedPokemos
            }
        })

        pokemonOptions = wrapper.findAll('li')
    })

    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
        // expect(wrapper.html()).toMatchInlineSnapshot(`
        //   <div class='options-container'>
        //     <ul>
        //       <li class=''>Bulbasaur</li>
        //       <li class=''>Ivysaur</li>
        //       <li class=''>Venusaur</li>
        //       <li class=''>Charmander</li>
        //     </ul>
        //   </div>
        // `)
    })

    test('should show 4 pokemon options', async () => {
        expect(pokemonOptions.length).toBe(4)
        mockedPokemos.forEach((pokemon, index) => expect(pokemon.name).toBe(pokemonOptions[index].text()))
    })

    test('should $emit event on pokemon option click', () => {
        pokemonOptions.forEach((pokemonOption, index) => {
            pokemonOption.trigger('click')

            expect(wrapper.emitted('pokemonSelected').length).toBe(index + 1)
            expect(wrapper.emitted('pokemonSelected')[index]).toEqual([mockedPokemos[index].id])
        })
    })
})
