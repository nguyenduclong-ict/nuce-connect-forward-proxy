const express = require('express');
var proxy = require('express-http-proxy');
const cors = require('cors');
const axios = require('axios').default;
const app = express();
app.use(cors());
target = 'http://daotao.nuce.edu.vn';
app.use('/crawl', proxy(target));

app.post('/login', (req, res) => {
  axios
    .post('http://daotao.nuce.edu.vn', req.body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      console.log(response.headers);
      res.send(response.headers);
    });
});

app.listen(3000);