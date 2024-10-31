const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.post('/add-pokemon', pokemonController.addPokemon);
router.get('/pokedex', pokemonController.getAllPokemons); 

module.exports = router;

