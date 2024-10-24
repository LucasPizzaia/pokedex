const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
  const pokemons = pokemonModel.getPokemons();
  res.render('index', { pokemons, content: 'content' }); 
};


const getPokemon = (req, res) => {
  const pokemon = pokemonModel.getPokemonById(req.params.id);
  if (pokemon) {
    res.render('pokemon', { pokemon });
  } else {
    res.status(404).send('Pokémon não encontrado');
  }
};

const createPokemon = (req, res) => {
  const { nome, tipo, altura, peso, nivelPoder } = req.body;
  if (nome && tipo && altura && peso && nivelPoder) {
    pokemonModel.createPokemon(nome, tipo, altura, peso, nivelPoder);
    res.redirect('/');
  } else {
    res.status(400).send('Todos os campos são obrigatórios');
  }
};


const deletePokemon = (req, res) => {
  const { id } = req.params;
  pokemonModel.deletePokemon(id);
  res.redirect('/');
};

module.exports = { getAllPokemons, getPokemon, createPokemon, deletePokemon };
