const auth = require('../middleware/auth')

module.exports = (express) => {
  let router = express.Router()

  router.get('/:id', auth, (req, res) => {
    console.log('get user' + req.params.id)
    res.send({ success: true, message: 'Found user' + req.params.id })
  })

  router.post('/signup', (req, res) => {
    console.log('sign up')
    res.send({ success: true, message: 'User signed up.' })
  })

  router.post('/signin', (req, res) => {
    console.log('sign in')
    res.send({ success: true, message: 'User signed in.' })
  })

  router.put('/:id', auth, (req, res) => {
    console.log('update', req.params.id, 'with', req.body)
    res.send({ success: true, message: 'Password updated.' })
  })

  return router
}
