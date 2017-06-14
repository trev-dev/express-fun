var express = require('express');
var mid = require('./modules/middleware');
var app = express();
var port = 5000;

app.set('view engine', 'pug');
app.use('/static', express.static(__dirname+'/public'));

app.use(mid.logger);
app.get('/', function(req, res) {

    res.render('index', {pretty:true});

});

app.get('/about', function(req, res){

    res.send('About Us');

});

app.listen(port, function(){

    console.log(`Server Started on port ${port}`);

});