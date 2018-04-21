const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.listen(3000, () => {
    console.log('Started on port 3000')
})
app.use(bodyParser.json())
app.post('/todos', (reg, res) => {
    let todo = new Todo({
        text: reg.body.text
    })
    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})



