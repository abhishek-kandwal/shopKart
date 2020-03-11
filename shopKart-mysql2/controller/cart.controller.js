const cartModel = require('../model/cart.model');

exports.empty = (req,res,next)=>{
    cartModel.fetchcartall().then(([data])=>{
        res.render('cart/cart',{"data": data});
    });
}

exports.additem = (req,res,next)=>{
    const cart = new cartModel(req.params);
    cart.additemCart().then(()=> {
        res.redirect('/cart');
    }).catch( err => console.log(err));
}

exports.removeitem = (req,res,next)=>{
    cartModel.removeitemCart(req.params.product_id).then(()=> {
        res.redirect('/cart');
    }).catch( err => console.log(err));
}

exports.addmore = (req,res,next)=>{
    cartModel.quantityitemCartplus(req.params.product_id).then(()=> {
        res.redirect('/cart');
    }).catch( err => console.log(err));
}

exports.submore = (req,res,next)=>{
    cartModel.quantityitemCartminus(req.params.product_id).then(()=> {
        res.redirect('/cart');
    }).catch( err => console.log(err));

}