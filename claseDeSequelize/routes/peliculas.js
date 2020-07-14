var express = require('express');
var router = express.Router();
const peliculasController = require('../controllers/peliculascontroller')

router.get('/', peliculasController.index)
router.get('/:id', peliculasController.detail)


module.exports = router