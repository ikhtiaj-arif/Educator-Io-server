const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.port || 5000;

const courses = require("./Data/courses.json");


app.get('/', (req, res) =>{
    res.send('working')
})

app.get("/courses", (req, res) =>{
    res.send(courses)
})


app.listen(Port, ()=>{
    console.log('server is running', Port)
})