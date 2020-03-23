const product = require('../model/addproduct.model')
const cartModel = require('../model/cart.model');

exports.empty = (req,res,next)=>{

    cartModel.fetchCart()
    .then(  products =>{
        res.render('cart/cart',{"data": products});
    })
    .catch( err => console.log(err));
}

exports.additem = (req,res,next)=>{

    product.findById(req.params.product_id)
    .then( products => {
        addToCartItem = new cartModel(
            products[0].productname,
            products[0].price,
            products[0].description,
            products[0]._id,
            1)
        
        addToCartItem.save()
        .then( () => {
            res.redirect('/cart');
        }).catch( err => {
            console.log(err);
        })
    }).catch( err => {
        console.log(err);
    });

}

exports.removeitem = (req,res,next)=>{

    cartModel.removeitem( req.params.product_id)
    .then(() => {
        res.redirect('/cart');
    }).catch(err => {
        console.log(err);
    });

}

// exports.addmore = (req,res,next)=>{

//     cartModel.increment({
//         quantity: 1
//     } , {
//         where : {
//             id : req.params.product_id
//         }
//     } ).then(() => {
//         res.redirect('/cart');
//     }).catch(err => {
//         console.log(err);
//     });

// }

// exports.submore = (req,res,next)=>{
    
//     cartModel.decrement({
//         quantity: 1
//     } , {
//         where : {
//             id : req.params.product_id
//         }
//     } ).then(() => {
//         res.redirect('/cart');
//     }).catch(err => {
//         console.log(err);
//     });

//}