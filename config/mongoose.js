const mongoose = require('mongoose')

const SHORT_URI = process.env.SHORT_URI || 'mongodb://localhost/short-url'
mongoose.connect(SHORT_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
})
module.exports = db