const express = require('express');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport_local');
const cookieParser = require('cookie-parser');
// const { session } = require('passport');

const app = express();

const port = process.env.PORT || 8000;
//encoding the url
app.use(express.urlencoded());
app.use(cookieParser());



// for setting up static files
app.use(express.static('./assets'));

//setting up the view enjine(ejs)
app.set('views' , './views');
app.set('view engine' , 'ejs');

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up the session cokkies in mongoDB
app.use(session({
    name : 'Quizo',
    secret : "8iDXrn0X1LF2DZ78Qxfr9KXlymXzbrYL",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create(
        {
             mongoUrl: 'mongodb+srv://dbWALKOVER:WALKOVER1234@cluster0.iptmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ,
             autoRemove: 'disabled'
        }
    )
}));


//passport initiaisation
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//for connecting routes
app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in loading the server : ${port}`);
        return;
    }
    console.log(`System is up and running on port : ${port}`);
})