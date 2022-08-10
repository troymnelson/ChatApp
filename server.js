const connection = require('./config/db-connection')
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // get the engine function from hbs package
require('dotenv').config(); // attach .env process to obj
const PORT = process.env.PORT || 3006; // set up port

const app = express(); // new express app
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { view_routes, auth_routes, post_routes } = require('./controllers'); // require path to view routes
// load view_routes on root route

// set up the hbs engine stuff
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public'))); // allows frontend files to be shared with browser/client
// accept form and json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// set up server
app.use(session({
    // This secret string will be compared to the client-side cookie to "authenticate" a user
    secret: process.env.SESSION_SECRET,
    // Stores our session data to the database instead of using server system memory
    store: new SequelizeStore({ db: connection }),
    // If we don't affect/change the session data during a request, this option
    // will allow the the store to "forget" the session at the end of a request
    saveUninitialized: false,
    // Keeps the sequelize store from deleting idle session data
    resave: false,
    // The cookie object allows us to manipulate the client-side cookie - set expiration,
    // set to httpOnly(is not accessible to client JS), etc.
    cookie: {
      // httpOnly: true
    }
}));

app.use('/', view_routes)
app.use('/auth', auth_routes)
app.use('/post', post_routes)

connection.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
})




