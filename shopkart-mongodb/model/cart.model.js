const getdb = require('../util/database').getdb;
const mongodb = require('mongodb');

const Cart = class cart {
    constructor(productname, price, description, product_id, quantity) {
        this.productname = productname,
            this.price = price,
            this.description = description,
            this.product_id = product_id,
            this.quantity = quantity
    }

    save() {
        const db = getdb();
        return db.collection('cart')
            .insertOne(this)
            .then(() => {
                console.log('save');
            })
            .catch(err => console.log(err));
    }

    static fetchCart() {
        const db = getdb();
        return db.collection('cart')
            .find()
            .toArray()
            .then(result => {
                return result;
            })
            .catch(err => console.log(err));
    }

    static removeitem(id) {
        const db = getdb();
        return db.collection('cart')
        .deleteOne({ _id : new mongodb.ObjectId(id)})
        .then(() => console.log("removed"))
        .catch(err => console.log(err));
    }
    
        static addmore(id){
        const db = getdb();
        return db.collection('cart')
        .find({_id : new mongodb.ObjectId(id)})
        .toArray()
        .then( productItem => {
            productItem[0].quantity += 1;
          return  db.collection('cart')
            .updateOne({_id : new mongodb.ObjectId(id)},{$set: {
                quantity : productItem[0].quantity
            } })
        })
        .catch(err => console.log(err));
        
    }

    

    static submore(id){
        const db = getdb();
        return db.collection('cart')
        .find({_id : new mongodb.ObjectId(id)})
        .toArray()
        .then( productItem => {
            productItem[0].quantity -= 1;
          return  db.collection('cart')
            .updateOne({_id : new mongodb.ObjectId(id)},{$set: {
                quantity : productItem[0].quantity
            } })
        })
        .catch(err => console.log(err));
        
    }
}

module.exports = Cart;
