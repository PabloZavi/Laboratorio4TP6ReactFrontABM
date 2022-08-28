const router = require('express').Router();
const Sequelize = require('sequelize');
//Me traigo el modelo instrumento
const { Instrumento } = require('../../db');

const Op = Sequelize.Op;

//Todas las peticiones que entran acá ya tienen el prefijo /api/instrumentos



router.get('/', async (req, res) => {
    const instrumentos = await Instrumento.findAll();
    res.json(instrumentos);
});

router.get('/:instrumentoId', async (req, res) => {
    const instrumento = await Instrumento.findByPk(req.params.instrumentoId);
    res.json(instrumento);
});

router.get('/buscar/:termino', async (req, res) => {
    const instrumentos = await Instrumento.findAll({
        where: {
            instrumento: {
                [Op.like]: `%${req.params.termino}%`
            }
        }
    });
    res.json(instrumentos);
});

router.post('/', async (req, res) => {
    const instrumento = await Instrumento.create(req.body);
    res.json(instrumento);
});

router.put('/:instrumentoId', async (req, res) => {
    await Instrumento.update(req.body, {
        where: {id: req.params.instrumentoId}
    });
    res.json({success: 'Instrumento modificado'})
    
});

router.delete('/:instrumentoId', async (req, res) => {
    await Instrumento.destroy({
        where: {id: req.params.instrumentoId}
    });
    res.json({success: 'instrumento borrado'});
});

module.exports = router;