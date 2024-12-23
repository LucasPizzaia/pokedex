const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/treinador', treinadorController.getAllTreinador);
router.get('/treinador/:id', treinadorController.getTreinador);
router.post('/add-treinador', treinadorController.addTreinador);
router.post('/delete-treinador/:id', treinadorController.deleteTreinador);
router.post('/treinador/:id/add-pokemon', treinadorController.addPokemonToTreinador);
router.post('/treinador/:id/remove-pokemon/:pokemonId', treinadorController.removePokemonFromTreinador);



module.exports = router;
