import React, {Component} from 'react';
import style from './style.scss';

export default class extends Component{

    constructor(props){
        super(props);

        this.changeViewToSignin = this.changeViewToSignin.bind(this);
        this.changeViewToSignup = this.changeViewToSignup.bind(this);
    }

    changeViewToSignin(ev){
        ev.preventDefault();
        ev.stopPropagation();

        this.props.changeView('SignIn');
    }

    changeViewToSignup(ev){
        ev.preventDefault();
        ev.stopPropagation();

        this.props.changeView('SignUp');
    }

    render(){

        let {viewID} = this.props;

        return (
            <div className="ui grid center aligned">
                <div className={`six wide column ${style.main}`}>
                    <h4 className={style.title}>
                        <div className={style['normal-title']}>
                            <a href="#"
                                className={`${viewID==='SignIn' ? style.active : ''}`}
                                onClick={this.changeViewToSignin}
                            >登录</a>
                            <b>·</b>
                            <a href="#"
                                className={`${viewID==='SignUp' ? style.active : ''}`}
                                onClick={this.changeViewToSignup}
                            >注册</a>
                        </div>
                    </h4>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
