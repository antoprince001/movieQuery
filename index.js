const express = require('express');
const resolvers = require('./resolvers');
const schema = require('./schema');
const app = express();

const {graphqlHTTP} = require('express-graphql');

app.get('/',(req,res)=>{
    res.send('MovieQuery');
});

const root = resolvers;
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue : root,
    graphiql : true
}))
app.listen(5000,()=>{
    console.log('Server Running');
});