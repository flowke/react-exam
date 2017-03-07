import React, {Component} from 'react';
import Frame from 'layout/frame/Frame';
import SignInPanel from 'component/userEntry/SignInPanel.js';

export default class extends Component{

    render(){

        return (
            <Frame {...this.props}>
                <SignInPanel {...this.props}></SignInPanel>
            </Frame>
        );
    }
}
