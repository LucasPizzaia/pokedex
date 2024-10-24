const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno', altura: 0.7, peso: 6.9, nivelPoder: 300 },
  { id: 2, nome: 'Squirtle', tipo: 'Água', altura: 0.5, peso: 9.0, nivelPoder: 250 },
  { id: 3, nome: 'Charmander', tipo: 'Fogo', altura: 0.6, peso: 8.5, nivelPoder: 320 },
];

const getPokemons = () => pokemons;

const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

const createPokemon = (nome, tipo, altura, peso, nivelPoder) => 
  pokemons.push({
    id: pokemons.length + 1, 
    nome, 
    tipo, 
    altura: parseFloat(altura), 
    peso: parseFloat(peso), 
    nivelPoder: parseInt(nivelPoder)
  });

const deletePokemon = (id) => {
  const index = pokemons.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    pokemons.splice(index, 1);
  }
};

module.exports = { getPokemons, getPokemonById, createPokemon, deletePokemon };

  