const passport = require('passport')
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../secret/authKey.js');
const { google } = keys; 

const modelNames = require('../models/modelNames');
const UsersModel = mongoose.model(modelNames.users);

passport.use(new GoogleStrategy({
  clientID: google.client.ID,
  clientSecret: google.client.SECRET,
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done)  => {
  new UsersModel({
    googleId: profile.id,
    name: profile.displayName,
  }).save();
}));
