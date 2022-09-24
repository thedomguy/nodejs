module.exports = (req, res, next) => {
    console.log(req.query.x);
    next()
}