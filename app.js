const tracer = require('dd-trace').init();
const express = require('express')
const app = express()
const port = 3000

const list = []

app.get('/', (req, res) => {

  res.send('OctoFX Rate Service ... ')
})

app.get('/rates', (req, res) => {
  res.send('USD: xx, CAD: xy, GBP: xz, SGP: yy AUD: yz')
})

app.listen(port, () => {
  console.log(`OctoFX Rate Service . Listening on port ${port}`)
})