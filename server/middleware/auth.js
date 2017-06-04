
module.exports = (req, res, next) => {
  console.log('in the middle')
  next()
}
