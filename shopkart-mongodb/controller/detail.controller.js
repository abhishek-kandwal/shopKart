const detailmodel = require('../model/detail.model');

exports.detailproduct = (req,res,next) => {
 const productId = req.params.id; 
 console.log(productId, 'pro id');
 detailmodel.getdetail(productId).then( data => {
    res.render('detail/detail', {data : data});
 }).catch(err => console.log(err));
}

exports.detailpage = (req,res,next) => {
    let data = [];
    res.render('detail/detail', {data: data});
}