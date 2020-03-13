const express = require('express'),
      bodyparser = require('body-parser'),
      path = require('path');

const home = require('./routes/home.route'),
      cart = require('./routes/cart.route'),
      admin = require('./routes/admin.route'),
      error = require('./routes/error.route'),
      sequelize = require('./util/database');

const app = express();

app.set('views',path.join(__dirname,'view'));
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({urlencoded:false}));
app.use(express.static('./public'));

app.use('/admin', admin);
app.use('/cart', cart);
app.use('/', home);
app.use(error);

// this sequelize.sync function checks the mysql db is table exist or not , if not it'll create the table for us.
// if we had defined the model
sequelize.sync({
    force : true // this will create the new table everytime it will get executed forcefully.
}).then(() => {
    console.log('connected & table created');
    app.listen(3000, () => console.log('server is running'));
}).catch(err => {
    console.log(err);
} );