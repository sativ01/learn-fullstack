const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'world'});
})

app.get('/test', (req, res) => {
  res.send({ test: 'hello'});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);