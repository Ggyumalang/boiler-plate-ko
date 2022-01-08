const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key');

//aplication/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json()); // bodyParser가 client에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것.

//어플리케이션 몽고 디비 연결
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~사랑해❤')
})

app.post('/register',(req,res) => {
  //회원가입 할때 필요한 정보들을 client 에서 가져오면
  //그것들을 db에 넣어 준다.

  const user = new User(req.body)

  user.save((err,userInfo)=>{
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success : true
    }); //200은 성공했다는 표시
  }) //몽고db의 메소드

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})