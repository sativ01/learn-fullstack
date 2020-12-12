const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../secret/authKey.js');
const { google } = keys; 

passport.use(new GoogleStrategy({
  clientID: google.client.ID,
  clientSecret: google.client.SECRET,
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done)  => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  console.log(done);
}));
