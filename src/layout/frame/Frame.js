import React, { Component } from 'react';
import Nav from 'layout/nav/nav';

import style from './frame.scss';

export default class Frame extends Component{

    render(){

        let {changeView} = this.props;

        return (
            <div className={`ui container`}>
                <div className={`ui hidden divider`}></div>

                <section className={`header ${style.header}`}>
                    <Nav {...this.props}/>
                </section>

                <div className={`ui hidden divider`}></div>

                <section className={``}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}
