const treinadores = [
    { id: 1, nome: 'Ash', pokemons: [] },
    { id: 2, nome: 'Misty', pokemons: [] },
    { id: 3, nome: 'Juca', pokemons: [] }
];

const getTreinador = () => treinadores;
const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));
const createTreinador = (nome, pokemons) => {
    const novoTreinador = { id: treinadores.length + 1, nome, pokemons };
    treinadores.push(novoTreinador);
};

const deleteTreinador = (id) => {
    const index = treinadores.findIndex(t => t.id === parseInt(id));
    if (index !== -1) treinadores.splice(index, 1);
};

const addPokemonToTreinador = (treinadorId, pokemonId) => {
    const treinador = getTreinadorById(treinadorId);
    if (treinador && !treinador.pokemons.includes(pokemonId)) {
        treinador.pokemons.push(pokemonId); // Adiciona o Pokémon ao treinador
    }
};

const removePokemonFromTreinador = (treinadorId, pokemonId) => {
    const treinador = getTreinadorById(treinadorId);
    if (treinador) {
        treinador.pokemons = treinador.pokemons.filter(p => p !== pokemonId); 
    }
};

module.exports = { 
    getTreinador, 
    getTreinadorById, 
    createTreinador, 
    deleteTreinador, 
    addPokemonToTreinador, 
    removePokemonFromTreinador 
};
