import React, {Component} from 'react';
const style = require('./body.scss');

export default class extends Component{

    render(){
        return (
            <div className={`${style.imgWrap}`}>
                <div className='ui hidden divider'></div>
                <img src={require('./img/homeBg.jpeg')}/>
            </div>
        );
    }
}
