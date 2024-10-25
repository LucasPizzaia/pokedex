const treinadorModel = require('../models/treinadorModel');

const getAllTreinador = (req, res) => {
    const treinadores = treinadorModel.getTreinador();
    res.render('treinador', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador de Pokémon não encontrado');
    }
};

const addTreinador = (req, res) => {
    const { nome } = req.body;
    treinadorModel.createTreinador(nome);
    res.redirect('/treinador');
};

const deleteTreinador = (req, res) => {
    treinadorModel.deleteTreinador(req.params.id);
    res.redirect('/treinador');
};

module.exports = { getAllTreinador, getTreinador, addTreinador, deleteTreinador };
