const express = require('express')
const app = express()
const port = 8000
const cors = require('cors');

// npm i cors in every project
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json());
require('./config/mongoose.config')
require('./routes/author.routes')(app)


app.listen(port,()=>console.log(`Locked and Loaded on Port ${port}`))
