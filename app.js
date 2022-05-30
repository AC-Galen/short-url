const express = require('express')
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
})




const port = 3000

app.get('/', (req, res) => {
  res.send('This is first page')
})




app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})