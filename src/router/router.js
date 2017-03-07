import React, {Component} from 'react';
import Home from 'view/home/Index.js';
import SignIn from 'view/userEntry/SignIn.js'
import SignUp from 'view/userEntry/SignUp.js'

export default class extends Component{

    constructor(props){

        super(props);
        this.state = {
            viewID: 'SignIn'
        }

        this.changView = this.changView.bind(this);

    }

    changView(viewID){
        this.setState({viewID});
    }

    render(){

        let {viewID} = this.state;

        let view = null;

        let props = {
            changeView: this.changView,
            viewID
        }

        switch (viewID) {
            case 'SignIn':
                view = <SignIn {...props}/>
                break;
            case 'SignUp':
                view = <SignUp {...props}/>
                break;
            case 'Home':
            default:
                view = <Home {...props}/>
        }

        return view ;
    }
}
;
