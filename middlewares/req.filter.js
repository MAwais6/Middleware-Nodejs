const reqFilter = (req, res, next) => {
    console.log('reqFilter');
    if (req.query.age < 18) {
        res.send('You are not allowed to enter');
    }else if (req.query.age >= 18) {
        next();
    }
}

module.exports = reqFilter;
