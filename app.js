const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

//Importing Routes
const blogRoutes = require('./routes/blogRoutes');
const indexRoutes = require('./routes/indexRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const notFoundRoutes = require('./routes/404Routes'); 




//express app
const app = express();

mongoose.connect(process.env.dbURI,{
   useNewUrlParser: true,
})
   .then((result) => {
      app.listen(process.env.PORT);
      console.log('Server is up and running ...');
   })
   .catch((err) => console.log("MongoDB " + err));

//register view engine
app.set('view engine', 'ejs');

// Change default view directory
// app.set('views','newViews');

//Using third-Party middleware
app.use(morgan('dev'));

//Using built in express middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



//Using Index Routes
app.use('/',indexRoutes);

//Using blog routes
app.use('/blogs', blogRoutes);

//Using About routes
app.use('/about',aboutRoutes);

//Using 404 routes
app.use(notFoundRoutes);