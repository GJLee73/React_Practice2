'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var port_dev = 3001;

app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(__dirname + '/../public'));

app.get('*', function (req, res, next) {
    //if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(_path2.default.resolve(__dirname, '../public/index.html'));
});

app.post('/log', function (req, res, next) {
    //console.log (req.body.name);
    return res.json({});
});

app.post('/test', function (req, res, next) {
    //console.log (req.body.name);
    return res.json({ num: 'seven' });
});

var server = app.listen(port, function () {
    console.log('Express listening on port', port);
});

if (process.env.NODE_ENV == 'development') {
    console.log('Express listening on port', port_dev);
    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(port_dev);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', 'server/main.js');

    __REACT_HOT_LOADER__.register(port, 'port', 'server/main.js');

    __REACT_HOT_LOADER__.register(port_dev, 'port_dev', 'server/main.js');

    __REACT_HOT_LOADER__.register(server, 'server', 'server/main.js');
}();

;