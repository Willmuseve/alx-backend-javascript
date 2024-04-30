const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

module.exports = app;
