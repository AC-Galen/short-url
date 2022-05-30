const express = require('express')
const exhbs = require('express-handlebars')
const app = express()
const port = 3000


app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.send('This is first page')
})




app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})