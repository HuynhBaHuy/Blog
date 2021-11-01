const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { query } = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP loggers
app.use(morgan('dev'));

// apply middleware to url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const route = require('./routes');

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

//Config template engine
app.set('views', path.join(__dirname, 'resources\\views'));

// home, search, contact

//Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
