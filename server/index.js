const path = require('path')

const express = require('express')
const app = express()

const morgan = require('morgan')

const port = process.env.PORT || 8080
const mode = process.env.MODE

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.text())


if(mode === 'dev' || mode === 'test'){
  app.use(morgan('dev'))
}

app.use(express.static('public'))

const userRoutes = require('./routes/user')(express)
app.use('/user', userRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

app.listen(port, () => {
  console.log('listening on:', port)
})

if (mode === 'test') {
  module.exports = app
}
