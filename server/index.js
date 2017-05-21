const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static('public'))

app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../public/index.html'))
  res.redirect('/')
})

app.listen(port, () => {
  console.log('listening on:', port)
})
