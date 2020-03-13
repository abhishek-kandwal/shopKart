const product = require('../model/addproduct.model')
const cartModel = require('../model/cart.model');

exports.empty = (req,res,next)=>{

    cartModel.findAll()
    .then(  products =>{
        res.render('cart/cart',{"data": products});
    })
    .catch( err => console.log(err));
}

exports.additem = (req,res,next)=>{

    product.findAll({
        where : {
            id : req.params.product_id
        }})
    .then( products => {
        cartModel.create({
            productname : products[0].productname,
            price: products[0].price,
            description: products[0].description,
            product_id: products[0].id,
            quantity: 1
        }).then( () => {
            res.redirect('/cart');
        }).catch( err => {
            console.log(err);
        })
    }).catch( err => {
        console.log(err);
    });

}

exports.removeitem = (req,res,next)=>{

    cartModel.destroy({
        where : {
            id : req.params.product_id
        }
    }).then(() => {
        res.redirect('/cart');
    }).catch(err => {
        console.log(err);
    });

}

exports.addmore = (req,res,next)=>{

    cartModel.increment({
        quantity: 1
    } , {
        where : {
            id : req.params.product_id
        }
    } ).then(() => {
        res.redirect('/cart');
    }).catch(err => {
        console.log(err);
    });

}

exports.submore = (req,res,next)=>{
    
    cartModel.decrement({
        quantity: 1
    } , {
        where : {
            id : req.params.product_id
        }
    } ).then(() => {
        res.redirect('/cart');
    }).catch(err => {
        console.log(err);
    });

}