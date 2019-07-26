require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING)
.then((dbinstance) => {
    app.set('db', dbinstance)
})
.catch(err => {
    console.log(err)
})

app.get('/api/inventory', ctrl.getInv)
app.post('/api/product', ctrl.newProduct)
app.delete(`/api/product/:id`, ctrl.deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Live from a concert of ${SERVER_PORT} banjo playing squirrels`))