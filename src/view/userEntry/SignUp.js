import React, {Component} from 'react';
import Frame from 'layout/frame/Frame';
import SignUpPanel from 'component/userEntry/SignUpPanel.js';

export default class extends Component{

    render(){

        return (
            <Frame {...this.props}>
                <SignUpPanel {...this.props}></SignUpPanel>
            </Frame>
        );
    }
}
