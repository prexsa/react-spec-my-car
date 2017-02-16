// https://stormpath.com/blog/build-a-react-app-with-user-authentication
// https://medium.com/front-end-developers/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.3gj01yurw
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname + '/src'));
app.get('/', function(req, res) {
  res.send('/index.html');
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on: ', port);