const express = require('express');
const format = require('./utils/txt.js');
const calc = require('./utils/num.js');

const app = express();

app.use(express.json());

app.get('/utils/num/:action', (req, res) => {
  const { action } = req.params;
  const input = req.query.input.split(',');

  const result = {
    action, input, output: calc(input, action),
  };

  res.send(result);
});

app.post('/utils/txt/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;

  const result = {
    action, input, output: format(input, action),
  };

  res.send(result);
});

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000');
});