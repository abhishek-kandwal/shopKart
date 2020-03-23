const express = require('express'),
    bodyparser = require('body-parser'),
    path = require('path');

const admin = require('./routes/admin.route');
      home = require('./routes/home.route'),
      cart = require('./routes/cart.route'),
      detail = require('./routes/detail.route'),
      error = require('./routes/error.route'),
      mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ urlencoded: false }));
app.use(express.static('./public'));

app.use('/admin', admin);
app.use('/cart', cart);
app.use('/detail', detail);
app.use('/', home);
app.use(error);

mongoConnect(() => {
    app.listen(3000, () => console.log('Connected!'));
});
