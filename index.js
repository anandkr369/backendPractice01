require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req,res) =>{
    res.send('Hello World')
})
app.get('/anand', (req,res)=>{
    res.send('<h1>My name is ANAND</h1>')
})
app.get('/port', (req, res) =>{
    res.send(`You are at port no: ${port}`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listining to ${port} ...`);
})