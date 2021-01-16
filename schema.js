const {buildSchema } = require('graphql');

const schema = buildSchema(`
    type Movie {
        id : ID
        movieName : String
        genre : String
        rating : Int
        language : String
        releaseDate : String
        platform : Platform
        cast : [Actor] 
    }

    type Actor {
        firstName : String
        lastName : String
        noOfMovies : Int
    }

    enum Platform{
        THEATRE
        OTT
        COMBINED
        OTHER
    }

    type Query{
        getMovie(id : ID) : Movie
    }

    input MovieInput{
        id : ID
        movieName : String!
        genre : String!
        rating : Int
        language : String
        releaseDate : String
        platform : Platform
        cast : [ActorInput]!
    }

    input ActorInput{
        firstName : String
        lastName : String
        noOfMovies : Int
    }

    type Mutation{
        createMovie(input : MovieInput) : Movie
        deleteMovie(id : ID) : Movie
    }

`);

module.exports=  schema;