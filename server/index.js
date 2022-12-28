const express = require('express')
const cors = require('cors');
require('dotenv').config()

const {graphqlHTTP} = require('express-graphql')

const schema = require('./schema/schema')
const connectDB = require('./config/db');

// declare port
const PORT = process.env.PORT || 8000;

const app = express()

// connect to db
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' ? true : false
}))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})