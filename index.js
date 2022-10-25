const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.port || 5000;

const courses = require("./Data/courses.json");
const coursesCollection = require('./Data/coursescollection.json')

app.get('/', (req, res) =>{
    res.send(courses)
})



app.get("/:id", (req, res) =>{
    const id = req.params.id;
    if(id === '0') {
        res.send(coursesCollection)
    }
    else{
        const match = coursesCollection.filter(e => e.id === id);
    res.send(match)
    }
    
})

app.get('/details/:id', (req, res)=> {
    const id = req.params.id;
    const match = coursesCollection.find(e => e._id ===id)
    res.send(match)
}) 


app.listen(Port, ()=>{
    console.log('server is running', Port)
})