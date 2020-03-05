const port = process.env.PORT || 4000
const express = require('express')
const request = require('request')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cheerio = require('cheerio');

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })



  app.get('/:artist/:title', function (req, res) {
    const title = req.params.title
    const artist = req.params.artist
    request.get(`https://api.lyrics.ovh/v1/${artist}/${title}`, function (error, response) {
        let resp = JSON.parse(response.body)
        res.json(resp)
    })
})


request.get("http://kineret.org.il/miflasim", function (error, response, body) {
  if (error) {
    console.log(error);
  }
  else if (body) {
    const $ = cheerio.load(body);
    const data = [
      today= $('.hp_miflas_height').text(),
      date= $('.hp_miflas_date').text(),
      info1=  $('#hp_miflas_info').text().slice(12,47),
      info2=  $('#hp_miflas_info').text().slice(49,84),
      info3=  $('#hp_miflas_info').text().slice(84,132)

    ]

    app.get('/data', async function (req, res)  {
      res.json(data)
    })

  }

  else {
    console.log("No body");
  }
});



  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });



mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:111111a@ds213178.mlab.com:13178/heroku_8nq6g9cl')


app.listen(port, () => {
  console.log(`Server is starting at PORT: ${port}`);
});