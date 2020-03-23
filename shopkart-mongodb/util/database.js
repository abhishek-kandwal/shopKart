const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    mongoclient.connect(
        'mongodb+srv://abhishekh:8979219626@cluster0-hdy80.mongodb.net/shop?retryWrites=true&w=majority'
        , { useUnifiedTopology: true })
        .then(client => {
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err, 'err');
        });
}

const getdb = () => {
    if(_db) {
        return _db;
    }
    throw 'no database found!';
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;