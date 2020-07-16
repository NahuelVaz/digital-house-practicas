

module.exports = (sequelize, dataTypes) => {
    const Genres = sequelize.define('Genres', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        active : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        }
    },{
            tableName: "genres",
            timestamps:false
    })
    Genres.associate = function(models){
        Genres.hasMany(models.Movies, {
            as : "movies",
            foreignKey : "genre_id"
        })
    }
        return Genres
}