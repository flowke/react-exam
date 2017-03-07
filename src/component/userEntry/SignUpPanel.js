import React , {Component} from 'react';
import Panel from './Panel';

export default class extends Component{

    render(){
        return (
            <Panel {...this.props}>
                <div className="sign-container">
                    <form className="ui form">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="用户名"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                placeholder="密码"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                placeholder="确认密码"
                            />
                        </div>
                        <div className="field">
                            <button type="submit"
                                className="ui button fluid primary"
                            >注册</button>
                        </div>
                    </form>
                </div>
            </Panel>
        );
    }
}
