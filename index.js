const express = require('express');
const mongoose = require('mongoose')
require('./models/User')
require('./services/passport')
const mongoKeys = require('./secret/authKey').mongo;

mongoose.connect(mongoKeys.uri)

const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);