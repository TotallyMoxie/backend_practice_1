const express = require('express')
const app = express()
// const userData  = require('./data')

app.use(express.json())
app.use(express.static('front'))
const urls = []


app.post('/url', (req, res) => {
  console.log(req.body)
  urls.push(req.body.url)
  res.json('http://localhost:5000/' + (urls.length))
 
})

app.get('/:url', (req, res) => {
  console.log(req.params.url)
  const url = urls[Number(req.params.url)-1]
  res.redirect(url)
})



app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})