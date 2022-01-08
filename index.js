const express = require('express')
const app = express()
const port = 3000

//어플리케이션 몽고 디비 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://GGYU:1234@cluster0.8mkwb.mongodb.net/Cluster0?retryWrites=true&w=majority',{
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~포롱이 사랑해❤')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})