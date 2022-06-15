const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateURL = require('./models/seeds/urlSeeder')

require('./config/mongoose')
const URL = require('./models/url')

const app = express()
const port = process.env.PORT || 3000


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({  extended: true }))


app.get('/', (req, res) => {
  return res.render('index')
})


app.post("/", async (req, res) => {
  const originalURL = req.body.originalURL
  const routes = await generateURL(originalURL)
  const shortenURL = `${req.protocol}://${req.get('host')}/${routes}`
  res.render('success', { originalURL, shortenURL })
});


app.get("/:shortenURL", (req, res) => {
  const shortenURL = req.params.shortenURL
  return URL.findOne({ shortenURL }).lean()
    .then(url => {
      res.status(301).redirect(url.originalURL)
  })
  .catch(err => console.log(err))
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})