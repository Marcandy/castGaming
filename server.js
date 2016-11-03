const express = require( "express" );
const { json } = require( "body-parser" );
const cors = require( 'cors' );
const mongoose = require( "mongoose" );
const app = express();
const port = 5000;
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const mongoUri = "mongodb://localhost:27017/castgaming";
const session = require('express-session');
const config = require('./config.js');

app.use( json() );
app.use( cors() );

app.use(session({
    secret: config.mySecrets.secret
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.secret,
  callbackURL: config.facebook.cbURL
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get( '/auth/facebook', passport.authenticate( 'facebook' ) );
app.get( '/auth/facebook/callback', passport.authenticate( 'facebook', {
	successRedirect: '/#/me',
	failureRedirect: '/login'
} ) );

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );





require( "./masterRoutes" )( app );
app.use( express.static( `${ __dirname }/public` ) );
app.listen( port, () => console.log( `Express is listening on ${ port }` ) );
