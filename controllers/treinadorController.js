const treinadorController = require('../models/treinadorController');

const getAllTreinador = (req, res) => {
    const treinador = treinadorController.getTreinador();
    res.render('treinador', { treinador });
};

const getTreinador = (req, res) => {
    const treinador = treinadorController.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador de pokemon não encontrado');
    }
};

const addTreinador = (req, res) => {
    const { nome } = req.body;
    treinadorModel.createTreinador(nome);
    res.redirect('/treinador');
};

const deleteTreinador = (req, res) => {
    trainerModel.deleteTreinador(req.params.id);
    res.redirect('/treinador');
};

module.exports = { getAllTreinador, getTreinador, addTreinador, deleteTreinador};