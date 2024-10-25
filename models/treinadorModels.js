const treinador = [
    { id: 1, nome: 'Ash', pokemons: [] },
    { id: 2, nome: 'Misty', pokemons: [] },
     { id: 3, nome: 'juca', pokemons: [] }
];


const getTreinador = () => treinador;
const getTreinadorById = (id) => treinador.find(t => t.id === parseInt(id));
const createTreinador = (nome) => {
    const novoTreinador= { id: treinador.length + 1, nome, pokemons: [] };
    trainers.push(novoTreinador);
};
const deleteTreinador= (id) => {
    const index = treinador.findIndex(t => t.id === parseInt(id));
    if (index !== -1) treinador.splice(index, 1);
};

module.exports = { getTreinador, getTreinadorById, createTreinador, deleteTreinador };
