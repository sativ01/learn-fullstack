const passport = require('passport')
const mongoose = require('mongoose');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../secret');
const { google } = keys; 

console.log(keys);

const modelNames = require('../models/modelNames');
const UsersModel = mongoose.model(modelNames.users);

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
  const user = await UsersModel.findById(id);
  done(null, user)
})

passport.use(new GoogleStrategy({
  clientID: google.client.ID,
  clientSecret: google.client.SECRET,
  callbackURL: '/auth/google/callback',
  proxy: true,
},
async (accessToken, refreshToken, profile, done)  => {
  let error = null;
  let user = null;
  try{
    user = await UsersModel.findOne({googleId: profile.id});

    if(!user){
      user = await new UsersModel({
        googleId: profile.id,
        name: profile.displayName,
      }).save();
    }
    done(null, user);
  } catch(err){
    error = err;
    done(error, user);
  }

}));

