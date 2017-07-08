const auth = require('../middleware/auth')

module.exports = (express) => {
  let router = express.Router()

  router.get('/:id', auth, (req, res) => {
    console.log('get user' + req.params.id)
    // res.send({ success: true, message: 'Found user : ' + req.params.id })
    res.send({
      success: true,
      message: 'Found user : ' + req.params.id,
      userData: [
        { nothing: [
          { id: 1, name: 'one', other: 1 },
          { id: 2, name: 'two', other: 22 },
          { id: 3, name: 'three', other: 333 },
          { id: 4, name: 'four', other: 4444 },
        ]},
        {
          year: [
          {}
        ]},
        {
          month: [
          {}
        ]},
        {
          week: [
          {}
        ]},
        {
          games: [
            {}
          ]
        }
      ]
    })
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
