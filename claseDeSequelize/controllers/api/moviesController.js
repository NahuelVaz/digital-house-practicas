const db = require('../../db/models')

let controller = {
    list: function(req, res){
        db.Movies.findAll()
            .then(function(movies){
                res.json(movies)
            })
    },
    detail: function(req, res){

    },
    create: function(req, res){
        db.Movies.create()
            .then(function(movie){
                console.log(movie)
                res.json({message: "Created"})
            })
            .catch(function(error){
                res.status(500).json({error})
            })
    },
    update: function(req, res){
        db.Movies.findByPk(req.params.id)
            .then(function(pelicula){
                res.json(pelicula)
            })
    },
    delete: function(req, res){
        
    }
}
module.exports = controller