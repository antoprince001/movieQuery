const short = require('short-uuid');
class Movie{
    constructor(id,{
        movieName ,genre ,rating ,language ,releaseDate ,platform ,cast 
    }){
        this.id = id
        this.movieName = movieName 
        this.genre = genre 
        this.rating = rating
        this.language = language 
        this.releaseDate = releaseDate
        this.platform = platform
        this.cast = cast
    }
}

const movieHolder = {}

const resolvers = {
        getMovie : ({ id }) => {
            return new Movie(id, movieHolder[id])
        },

        createMovie : ({ input })=>{
            console.log()
            let id =  short.generate();
            console.log(id);
            movieHolder[id] = input;
            return new Movie(id,input)
        },
         
        deleteMovie : ({ id }) =>{
            let datum = movieHolder[id]
            delete movieHolder[id]
            return new Movie(id, datum)
        }
}

module.exports=  resolvers;