const {MongoClient, ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect Mongodb server')
    }
    console.log('Connect to Mongodb server')
    const db = client.db('TodoApp')
    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        if(err){
            console.log('Unable fetch Users', err)
        }
    })
})