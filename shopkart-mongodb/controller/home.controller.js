const addproductmodel = require('../model/addproduct.model');

module.exports = (req,res,next)=>{
    addproductmodel.fetchAll()
        .then(  products =>{
            res.render('home/home', {'data': products });        
        })
        .catch( err => console.log(err));
}