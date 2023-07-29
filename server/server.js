const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const cors = require('cors')

const connectDB = require('./database/mongoose');

const app = express();

app.get('/' , (req, res) => {
  res.send('hello world')
})

dotenv.config( { path : '.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.json())

// aplly cors politicy
app.use(cors())

// load routers
app.use('/', require('./routes/router'))

app.listen(PORT, ()=> { console.log(`📰 HTTP Server is running on http://localhost:${PORT}`)});