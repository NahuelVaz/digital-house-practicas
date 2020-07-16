module.exports = (sequelize, dataTypes) => {
    const Movies = sequelize.define('Movies', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : 0
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED
        }
    },{
        tableName : 'movies',
        timestamps : false
    })
    Movies.associate = function(models){
        Movies.belongsTo(models.Genres, {
            as: "genre",
            foreignKey: "genre_id"
        })
    }
    return Movies
}