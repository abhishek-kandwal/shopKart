const mongodb = require('mongodb');
const getdb = require('../util/database').getdb;

const Product = class product {
    constructor(title, productname, price, description, id) {
        this.title = title,
            this.productname = productname,
            this.price = price,
            this.description = description,
            this._id = id ? new mongodb.ObjectId(id): null
    }

    save() {
        const db = getdb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('products').updateOne({ _id: this._id }, { $set: {
                title : this.title,
                productname : this.productname,
                price : this.price,
                description : this.description,
            } });
        } else {
            dbOp = db.collection('products')
                .insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(" ");
            })
            .catch(err => console.log(err));
    }

    static fetchAll() {
        const db = getdb();
        return db.collection('products')
            .find()
            .toArray()
            .then(result => {
                return result;
            })
            .catch(err => console.log(err));
    }

    static findById(id) {
        const db = getdb();
        return db.collection('products')
            .find({
                _id : new mongodb.ObjectId(id)
            })
            .toArray()
            .then(result => { 
                return result })
            .catch(err => console.log(err));
    }

}

module.exports = Product; 