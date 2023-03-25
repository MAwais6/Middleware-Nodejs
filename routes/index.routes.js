const express = require('express')
const router = express.Router()

// path: middleware/req.filter.js
const reqFilter = require('../middlewares/req.filter')


// Path: routes/index.routes.js
router.get('/', reqFilter ,(req, res) => {
    res.send('Welcome to the Home Page')
    }
);

module.exports = router
