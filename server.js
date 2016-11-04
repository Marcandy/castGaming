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
const User = require ('./server/features/user/user.js');

app.use( json() );
app.use( cors() );

app.use(session({
    secret: config.mySecrets.secret
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );
require( "./masterRoutes" )( app );


passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.secret,
  callbackURL: config.facebook.cbUrl,
  profileFields: ['id', 'name', 'email', 'photos'],
}, function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ facebookId: profile.id  }, {name: profile.displayName, imgUrl: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'}, function (err, user) {
      console.log(user);
      return cb(err, user);
    });
  }
))

app.get( '/auth/facebook', passport.authenticate( 'facebook' ) );
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/#/home',
    failureRedirect: '/'
}))
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/user', (req, res) => {
	res.send(req.user);
})




app.use( express.static( `${ __dirname }/public` ) );
app.listen( port, () => console.log( `Express is listening on ${ port }` ) );
