const db = require('../util/database');

module.exports = class addProduct{
    constructor(product_details_received){
        this.productname = product_details_received.product_name;
        this.productprice = product_details_received.product_price;
        this.productdescription = product_details_received.product_description;
    }

    save(){
        return db.execute("INSERT INTO shopKartDB_items (productname,price ,description) VALUES(?,?,?)",[this.productname, this.productprice, this.productdescription]);
    } 

    static fetchall(){
        return db.execute("SELECT * FROM shopKartDB_items");
    }
}