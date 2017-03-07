import React, {Component} from 'react';
import Body from 'component/home/Body';
import Frame from 'layout/frame/Frame.js';
export default class extends Component{

    render(){
        let {changeView} = this.props;

        return (
            <Frame {...this.props}>
                <Body/>
            </Frame>
        );
    }
}
