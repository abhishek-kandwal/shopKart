const addproductmodel = require('../model/addproduct.model');

exports.adminpage = (req,res,next)=>{
    res.render('admin/admin');
}

exports.newitem = (req,res,next)=>{
    let product = new addproductmodel(req.body);
    product.save().then(()=>{
        addproductmodel.fetchall().then( () =>{
            res.redirect('/');
        }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}