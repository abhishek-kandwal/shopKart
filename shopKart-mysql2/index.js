const express = require('express'),
      bodyparser = require('body-parser'),
      path = require('path');

const home = require('./routes/home.route'),
      cart = require('./routes/cart.route'),
      admin = require('./routes/admin.route'),
      error = require('./routes/error.route');

const app = express();

app.set('views',path.join(__dirname,'view'));
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({urlencoded:false}));
app.use(express.static('./public'));

app.use('/admin', admin);
app.use('/cart', cart);
app.use('/', home);
app.use(error);

app.listen(3000, ()=> console.log('server is running'));