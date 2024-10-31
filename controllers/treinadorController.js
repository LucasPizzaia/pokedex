const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTreinador = (req, res) => {
    const treinadores = treinadorModel.getTreinador();
    const pokemons = pokemonModel.getPokemons();
    res.render('treinador', { treinadores, pokemons, treinador: null }); 
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        const pokemonsDoTreinador = treinador.pokemons.map(pokemonId => pokemonModel.getPokemonById(pokemonId)).filter(p => p); 
        const allPokemons = pokemonModel.getPokemons(); 
        res.render('treinador', { treinador, pokemonsDoTreinador, pokemons: allPokemons }); 
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
    treinadorModel.addPokemonToTreinador(treinadorId, pokemonId);
    res.redirect(`/treinador/${treinadorId}`);
};

const removePokemonFromTreinador = (req, res) => {
    const treinadorId = req.params.id;
    const pokemonId = parseInt(req.params.pokemonId);
    treinadorModel.removePokemonFromTreinador(treinadorId, pokemonId);
    res.redirect(`/treinador/${treinadorId}`);
};

module.exports = {
    getAllTreinador,
    getTreinador,
    addTreinador,
    deleteTreinador,
    addPokemonToTreinador,
    removePokemonFromTreinador
};
