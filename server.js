const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/Xharktank'
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const pitchRouter = require('./routes/pitches')
app.use('/pitches',pitchRouter)

// -----------newly added------------
const authRouter = require('./routes/auth')
app.use('/auth',authRouter)

app.listen(8081, () => {
    console.log('Server started at localhost:8081')
})
