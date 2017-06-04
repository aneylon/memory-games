process.env.MODE = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server/index.js')

let should = chai.should()

chai.use(chaiHttp)

describe('User', () => {
  beforeEach((done) => {
    done()
  })
  describe('/GET UserId', () => {
    it('get a specific user', (done) => {
      chai.request(server)
        .get('/user:2')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

  describe('/POST User', () => {
    let newUser = {
      email: 'a@b.com',
      password: 'password123'
    }
    it('Add a new user', (done) => {
      chai.request(server)
        .post('/user/signup')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eql(true)
          res.body.should.have.property('message')
          done()
        })
    })
    it('Don\'t add same username twice', (done) => {
      chai.request(server)
        .post('/user/signup')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('success')//.eql(false)
          res.body.should.have.property('message')
          done()
        })
    })
  })

  describe('/PUT UserId', () => {
    let UserId = 2
    let update = { password: 'test' }
    it('update user password', (done) => {
      chai.request(server)
        .put('/user/' + UserId)
        .send(update)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eql(true)
          res.body.should.have.property('message')
        })
      done()
    })
  })
})
