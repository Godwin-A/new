var express = require('express')
var app = express()

app.set('view engine', 'ejs')


app.get('/', function(req, res){
    res.render('home')
})

app.get('/next', (req, res)=>{
  res.render('next')
})

app.listen(4500, function(){
  console.log('server is live')
})