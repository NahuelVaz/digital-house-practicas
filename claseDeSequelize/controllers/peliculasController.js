const db = require('../db/models')

let controller = {
    index: function(req, res){
        db.Movies.findAll()
        .then(function(peliculas){
            res.render("peliculas", {peliculas: peliculas})
        })
    },
    detail: function(req, res){
        db.Movies.findByPk(req.params.id)
        .then(function(pelicula){
            res.render("detail", {pelicula: pelicula})
        })
    },
    
}
module.exports = controller