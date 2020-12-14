const mongoose = require('mongoose');
const modelNames = require('./modelNames');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
})

mongoose.model(modelNames.users, userSchema);
