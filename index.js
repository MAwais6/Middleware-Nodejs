const express = require('express')
const app = express()
const port = 3000

// require the routes
const indexRoutes = require('./routes/index.routes')

// use the routes
app.use('/', indexRoutes)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
