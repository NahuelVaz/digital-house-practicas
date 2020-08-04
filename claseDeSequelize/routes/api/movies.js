var express = require('express');
var router = express.Router();
const moviesController = require('../../controllers/api/moviesController')


router.get('/movies', moviesController.list)

router.get('/movies/:id', moviesController.detail)

router.post('/movies', moviesController.create)

router.patch('/movies/:id', moviesController.update)

router.delete('/movies/:id', moviesController.delete)