const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js')[0];

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const root = path.join(path.resolve(__dirname, '.'));

app.engine('.html', expressEngine);
app.set('views', path.resolve(__dirname, "./dist"));
app.set('view engine', 'html');

enableProdMode();

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, './dist/index.html')));
        res.end();
    });
} else {
    app.use(express.static(path.resolve(__dirname, './dist')));
    app.get('*', function response(req, res) {
        res.sendFile(path.resolve(__dirname, './dist/index.html'));
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

// Angular 2
var universalPreview = require('angular2-universal-preview');
var expressEngine = universalPreview.expressEngine;
var REQUEST_URL = universalPreview.REQUEST_URL;
var NODE_LOCATION_PROVIDERS = universalPreview.NODE_LOCATION_PROVIDERS;

var angularCore = requrie('angular2/core');
var provide = angularCore.provide;
var enableProdMode = angularCore.enableProdMode;

var angularRouter = require('angular2/router');
var APP_BASE_HREF = angularRouter.APP_BASE_HREF;
var ROUTER_PROVIDERS = angularRouter.ROUTER_PROVIDERS;

var App = require('./app/app').App;

function ngApp(req, res) {
  var baseUrl = '/';
  var url = req.originalUrl || '/';
  res.render('./dist/index', {
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