var express = require('express');
var router = express.Router();
const peliculasController = require('../controllers/peliculascontroller')

router.get('/', peliculasController.index)
router.get('/crear', peliculasController.create)
router.get('/:id', peliculasController.detail)

router.post('/', peliculasController.creada)

module.exports = router