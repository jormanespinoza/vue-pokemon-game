import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture.vue', () => {

    test('should match snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 25,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should show hidden pokemon and pokemon with 1', () => {
        const pokemonId = 1
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId,
                showPokemon: false
            }
        })

        const [hiddenPokemonImage, pokemonImage] = wrapper.findAll('img')

        expect(hiddenPokemonImage.exists()).toBeTruthy()
        expect(hiddenPokemonImage.classes('hidden-pokemon')).toBeTruthy()
        expect(pokemonImage).toBe(undefined)
        expect(hiddenPokemonImage.attributes('src'))
            .toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`)
    })

    test('should show pokemon when showPokemon is true', () => {
        const pokemonId = 25
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId,
                showPokemon: true
            }
        })

        const [, pokemonImage] = wrapper.findAll('img')

        expect(pokemonImage.exists()).toBeTruthy()
        expect(pokemonImage.classes('fade-in')).toBeTruthy()
        expect(pokemonImage.attributes('src'))
            .toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`)
    })
})