import React, {Component} from 'react';

export default class Nav extends Component{

    constructor(props){
        super(props);

        this.changeToHome = this.changeToHome.bind(this);
        this.changeToSignin = this.changeToSignin.bind(this);
        this.changeToSignup = this.changeToSignup.bind(this);
    }

    changeToHome(ev){
        ev.preventDefault();
        ev.stopPropagation();
        this.props.changeView('Home');
    }

    changeToSignin(ev){
        ev.preventDefault();
        ev.stopPropagation();
        this.props.changeView('SignIn')
    }

    changeToSignup(ev){
        ev.preventDefault();
        ev.stopPropagation();
        this.props.changeView('SignUp');
    }

    render(){
        let {viewID} = this.props;
        return (
            <div className={`ui menu`}>
                <a href="#"
                    className={`header item`}
                    onClick = {this.changeToHome}
                >noods.me</a>
                <a href="#"
                    className={`item ${viewID==='Home' ? 'active' : '' }`}
                    onClick = {this.changeToHome}
                >首页</a>
                <div className="right menu">
                    <a href="#"
                        onClick={this.changeToSignin}
                        className={`item ${viewID==='SignIn' ? 'active' : '' }`}
                    >登录</a>
                    <a href="#"
                        onClick={this.changeToSignup}
                        className={`item ${viewID==='SignUp' ? 'active' : '' }`}
                    >注册</a>
                </div>

            </div>
        );
    }
}
