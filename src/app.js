import React from 'react';
import ReactDOM from 'react-dom';

require('semantic-ui/dist/semantic.css');
require('common/css/main.scss');

import Router from 'router/router.js'


ReactDOM.render(
    <Router/>,
    document.getElementById('root')
);

if (module.hot){
    module.hot.accept()
}
