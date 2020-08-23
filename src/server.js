require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3040;
const env = process.env.NODE_ENV;

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`ENV: ${env}`)
  console.log(`Server is listening on port ${PORT}`);
});