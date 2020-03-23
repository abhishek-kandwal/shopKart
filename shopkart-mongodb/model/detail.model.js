const mongo = require('mongodb');
const getdb = require('../util/database').getdb;

const Detail = class detail {
    static getdetail(id) {
        const db = getdb();
       return db.collection('products')
        .find({
            _id : new mongo.ObjectId(id)
        })
        .toArray()
        .then(result => {
            return result;
        })
        .catch(err => console.log(err));
    }
}

module.exports = Detail;