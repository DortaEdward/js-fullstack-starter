const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

const PORT = process.env.PORT || 5023;

app.get('/', (req,res) => {
  res.json({
    status: 200,
    message:'Basic Javascript express API!'
  })
})

app.listen(PORT,() => {
  console.log('Listening on Port:', PORT);
});