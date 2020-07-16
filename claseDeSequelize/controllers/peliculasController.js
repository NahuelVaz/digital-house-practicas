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
    create: function(req, res){
        db.Genres.findAll()
        .then(function(generos){
            res.render("crearPelicula", {generos: generos})
        })
    },
    creada: function(req, res){
        db.Movies.create({
            title : req.body.title,
            rating : req.body.rating,
            awards : req.body.awards,
            release_date : req.body.release_date,
            length : req.body.length,
            genre_id : req.body.genre
        })
        res.redirect("/peliculas")
    }
    
}
module.exports = controller