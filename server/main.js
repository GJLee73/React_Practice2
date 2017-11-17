import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import bodyParser from 'body-parser';

const app =  express ();
const port = 3000;
const port_dev = 3001;

app.use (bodyParser.json());

app.use('/', express.static(__dirname + '/../public'));

app.get('*', (req, res, next) => {
    //if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.post ('/log', (req,res,next) => {
    //console.log (req.body.name);
    return res.json ({});
});

app.post ('/test', (req,res,next) => {
    //console.log (req.body.name);
    return res.json ({num: 'seven'});
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Express listening on port', port_dev);
    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(port_dev);
}