const {MongoClient, ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect Mongodb server')
    }
    console.log('Connect to Mongodb server')
    const db = client.db('TodoApp')
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5ad80ed89eef4796d59af655')}, {
        $set: {
            name: 'Thai Anh'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: true
    }).then((result) => console.log(result))
})