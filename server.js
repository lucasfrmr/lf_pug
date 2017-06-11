var express = require('express');
var path = require('path');

var app = express();

app.use(function(req, res, next){
  res.locals.sketch = req.query.sketch;
  next();
})

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

// app.locals.pretty = true;

app.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Home',
  	year: new Date().getFullYear(),
  	client_ip: req.headers['x-forwarded-for']
  });
});

app.get('/projects', function(req, res){
  res.render('projects.pug', { title: 'Projects',
  	client_ip: req.headers['x-forwarded-for']
  });
});

app.get('/about', function(req, res){
  res.render('about.pug', { title: 'About',
  	client_ip: req.headers['x-forwarded-for']
  });
});

app.get('/embedSketch', function(req, res){
  res.render('includes/embedSketch.pug', { 
  	title: 'Sketch',
  	client_ip: req.headers['x-forwarded-for'],
	 url: req.param('url')
         //url: 'js/sketches/cards.js'

  });
});
app.get('/embedSketch2', function(req, res){
  res.render('includes/embedSketch2.pug', { 
  	title: 'Sketch',
  	client_ip: req.headers['x-forwarded-for'],
    url1: 'js/sketches/perlinNoise.js'

  });
});



app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
