const addproductmodel = require('../model/addproduct.model');

module.exports = (req,res,next)=>{
    addproductmodel.fetchall().then( ([data])=>{
        res.render('home/home', {'data': data});        
     }).catch( err => console.log(err));
}