/* 
quando clicar no pokemon da listagem temos que esconder o cartao aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com 2 elementos:
1- listagem
2- cartao pokemon

preciso criar 2 variaveis no JS para trabalhar com os elementos da tela

preciso trabalhar com um evento de clique feito pelo usuário na listagem de pokemons

- remover a classe aberto só do cartao que estiver aberto
- ao clicar em um pokemon da listagem, pego o id desse pokemon para saber qual cartao mostrar

- remover a classe ativo que marca o pokemon selecionado

-adicionar a classe ativo no item da lista selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)

        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
