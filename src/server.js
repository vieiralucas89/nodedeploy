if(process.env.NODE_ENV !== 'production') {
    require('des').load()
}
console.log('env--->', process.env);
// require('dotenv/config');

const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT == 3333);