const {MongoClient, ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect MongoDB server')
    }
    console.log('Connect to MongoDB server')
    const db = client.db('TodoApp')
    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
        console.log(result)
    })
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ad7278842545b02f19b6a5c')}).then((result)=> {
        console.log(`Hehehe: ${result}`)
    })
})
