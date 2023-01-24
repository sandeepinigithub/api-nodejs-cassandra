module.exports.requestLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
}

module.exports.requestTime = (req, res, next)=> {
    req.requestTime = Date.now()
    next()
}