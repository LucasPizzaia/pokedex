const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
  { id: 2, nome: 'Squirtle', tipo: 'Àgua' },
  { id: 3, nome: 'Charmander', tipo: 'Fogo' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => {
    const novoPokemon = { id: pokemons.length + 1, nome, tipo };
    pokemons.push(novoPokemon);
};

module.exports = { getPokemons, getPokemonById, createPokemon };
