var express = require('express');
var app = express();

const path = require('path');
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  console.log(__dirname);
  console.log('Inside app.get method');
  res.sendFile('index.html');
  console.log('sharma');
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
