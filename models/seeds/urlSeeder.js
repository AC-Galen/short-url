const mongoose = require('mongoose')
const url = require('../url')

mongoose.connect(process.env.SHORT_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < 5; i++) {
    url.create({ url: `url-${i}`})
  }
  console.log('done')
})
