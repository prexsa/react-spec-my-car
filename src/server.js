const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./../webpack.config.dev');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.listen(port, function onAppListening(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('==> Webpack development server listening on port %s', port);
  } 
})