const addproductmodel = require('../model/addproduct.model');

exports.adminpage = (req,res,next)=>{
    res.render('admin/admin' , {edit : false});
}

exports.newitem = (req,res,next)=>{
    let product = new addproductmodel( 
        req.body.product_title,
        req.body.product_name,
        req.body.product_price,
        req.body.product_description );
    product.save()
    .then(() => res.redirect('/'))
    .catch( err => console.log(err));
}

exports.edit = (req,res,next)=>{
    const id = req.params.editid;
    addproductmodel.findById(id)
    .then( data => {
        console.log(data);
        res.render('admin/admin' , {data: data , edit: true});
    })
    .catch( err => console.log(err));
}

exports.editUpdate = (req,res,next)=>{
    let product = new addproductmodel( 
        req.body.product_title,
        req.body.product_name,
        req.body.product_price,
        req.body.product_description,
        req.body.product_id);
    product.save()
    .then(() => res.redirect('/'))
    .catch( err => console.log(err));
}