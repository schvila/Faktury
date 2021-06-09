const port = 5000;

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express()
 //Enable all cors requests
app.use(cors())

const mongoConnect = require('./util/database').mongoConnect;

//app.listen(port, () => `Server running on port ${port}`);
mongoConnect(() => {
    app.listen(port);
  });
  