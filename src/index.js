/** @format */

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const {query} = require('express');
const methodOverride = require('method-override');

const db = require('./config/db');
//connect to db
db.connect();
const app = express();
const port = 3000;
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//HTTP loggers
app.use(morgan('dev'));

// apply middleware to url encoded
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const route = require('./routes');

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');

//Config template engine
app.set('views', path.join(__dirname, 'resources', 'views'));

// home, search, contact

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
