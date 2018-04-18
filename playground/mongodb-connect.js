const {MongoClient, ObjectID} = require('mongodb')
let obj = new ObjectID()
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Enable to connect Mongodb server')
    const db = client.db('TodoApp')
    const createCollection = {
        Todos: (collection, text, completed) => {
            db.collection(collection).insertOne({
                text,
                completed
            }, (err, result) => {
                if(err){
                    return console.log('Unable to insert todo', err)
                }
                console.log(JSON.stringify(result.ops, undefined, 2))
            })
        },
        Users: (collection, name, age, location) => {
            db.collection(collection).insertOne({
                name,
                age,
                location
            }, (err, result) => {
                if(err){
                    return console.log('Unable to insert result', err)
                }
                console.log(JSON.stringify(result.ops, undefined, 2))
            }) 
        }
    }
    createCollection.Todos('Todos', 'Something to do', false)
    createCollection.Todos('Todos', 'Walk the dog', true)
    createCollection.Users('Users', 'Jen', 23, 'Philadephia')
    createCollection.Users('Users', 'Mike', 23, 'Philadephia')
    createCollection.Users('Users', 'Andrew', 23, 'Philadephia')
    createCollection.Users('Users', 'Andrew', 23, 'Philadephia')
    createCollection.Users('Users', 'Andrew', 23, 'Philadephia')
})