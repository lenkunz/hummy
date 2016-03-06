import * as path from 'path';
var express = require('express');

// Angular 2
import {expressEngine, REQUEST_URL, NODE_LOCATION_PROVIDERS} from 'angular2-universal-preview';
import {provide, enableProdMode} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {App} from './app';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', path.resolve(expressEngine, "./public"));
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';
  res.render('index', {
    App,
    providers: [
      provide(APP_BASE_HREF, {useValue: baseUrl}),
      provide(REQUEST_URL, {useValue: url}),
      ROUTER_PROVIDERS,
      NODE_LOCATION_PROVIDERS,
    ],
    preboot: true
  });
}

// Serve static files
app.use(express.static(root));

// Routes
app.use(ngApp);

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});