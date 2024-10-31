const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTreinador = (req, res) => {
    const treinadores = treinadorModel.getTreinador();
    const pokemons = pokemonModel.getPokemons();
    res.render('treinador', { treinadores, pokemons });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        const pokemons = pokemonModel.getPokemons(); // Pega todos os Pokémon disponíveis
        res.render('treinadorDetalhes', { treinador, pokemons }); // Renderiza a página de detalhes do treinador
    } else {
        res.status(404).send('Treinador de Pokémon não encontrado');
    }
};

const addTreinador = (req, res) => {
    const { nome, pokemons } = req.body;
    const pokemonsSelecionados = Array.isArray(pokemons) ? pokemons : [pokemons];
    treinadorModel.createTreinador(nome, pokemonsSelecionados);
    res.redirect('/treinador');
};

const deleteTreinador = (req, res) => {
    treinadorModel.deleteTreinador(req.params.id);
    res.redirect('/treinador');
};

const addPokemonToTreinador = (req, res) => {
    const treinadorId = req.params.id;
    const pokemonId = parseInt(req.body.pokemon);
    treinadorModel.addPokemonToTreinador(treinadorId, pokemonId); // Adiciona o Pokémon ao treinador
    res.redirect(`/treinador/${treinadorId}`); // Redireciona para a página de detalhes do treinador
};

const removePokemonFromTreinador = (req, res) => {
    const treinadorId = req.params.id;
    const pokemonId = parseInt(req.params.pokemonId);
    treinadorModel.removePokemonFromTreinador(treinadorId, pokemonId); // Remove o Pokémon do treinador
    res.redirect(`/treinador/${treinadorId}`); // Redireciona para a página de detalhes do treinador
};

module.exports = { 
    getAllTreinador, 
    getTreinador, 
    addTreinador, 
    deleteTreinador, 
    addPokemonToTreinador, 
    removePokemonFromTreinador 
};
