

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

let port = 8000;

config.entry.unshift(
    `webpack-dev-server/client?http://127.0.0.1:${port}`,
    'webpack/hot/only-dev-server'

)

// config.output.publicPath = `http://localhost:${port}/assets/`;

let complier = webpack(config);


new WebpackDevServer(complier, config.devServer)
.listen(port, 'localhost', (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Listening at localhost:${port}`);
});
