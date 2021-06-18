const port = 5000; 

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const app = express()
 //Enable all cors requests
app.use(cors())

mongoose
  .connect(
    'mongodb+srv://standa:rnEZ3rjw3lf9J7Bh@cluster0.5tfx5.mongodb.net/invoices?retryWrites=true',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(result =>{
    console.log(result);
    app.listen(port);

  })
  .catch(err =>{
    console.log(err);
  })
