var mid = {

    logger: function(req, res, next) {
        var now = new Date().toString();
        console.log('');
        console.log(now);
        console.log(`Request: ${req.method} ${req.url}`);
        next();

    }

}

module.exports = mid;