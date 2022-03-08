
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://root:admin123@cluster0.vjjrp.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(collection)
    client.close();
});
