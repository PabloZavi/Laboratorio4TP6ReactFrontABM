const router = require('express').Router();

const apiInstrumentosRouter = require('./api/instrumentos');

//Todas las peticiones que ingresen con /instrumentos las mando al gestor apiInstrumentosRouter
//Ya todas las rutas que entran a este fichero vienen con el prefijo /api
//entonces todas las que entran al gestor apiInstrumentosRouter ya tendrán el prefijo /api/instrumentos 
router.use('/instrumentos', apiInstrumentosRouter);

module.exports = router;