const addproductmodel = require('../model/addproduct.model');

exports.adminpage = (req,res,next)=>{
    res.render('admin/admin');
}

exports.newitem = (req,res,next)=>{
    addproductmodel.create({
        productname : req.body.product_name,
        price : req.body.product_price,
        description : req.body.product_description
    })
    .then(() => res.redirect('/'))
    .catch( err => console.log(err));
}