const db = require('../util/database');

module.exports = class Cart {
    constructor(item){
        this.product_id = item.product_id;
    }

    additemCart(){
     return db.execute("select * from shopKartDB_cart where product_id = ?" ,[ this.product_id]).then( ([item]) => {
        
        if(item.length > 0){
            return item;
        }

        db.execute("SELECT * FROM shopKartDB_items WHERE id = ?", [this.product_id]).then( ([ProductData])  => {
            return db.execute("INSERT INTO shopKartDB_cart (productname, price , description, product_id , quantity) VALUES (?,?,?,? , 1)",[ProductData[0].productname, ProductData[0].price , ProductData[0].description , ProductData[0].id]);
          }).catch(err=> console.log(err));
      })
    }

    static fetchcartall(){
        return db.execute("SELECT * FROM shopKartDB_cart");
    }

    static removeitemCart(id){
        return db.execute("DELETE FROM shopKartDB_cart WHERE id = ?", [id]);
    }

    static quantityitemCartplus(id){
        return db.execute("UPDATE shopKartDB_cart SET quantity = quantity + 1  WHERE id = ?", [id]);   
    }

    static quantityitemCartminus(id){
        return db.execute("UPDATE shopKartDB_cart SET quantity = quantity - 1  WHERE id = ?", [id]);   
    }
}   