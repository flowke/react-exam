import React, { Component, PropTypes} from 'react';

export default class Footer extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(ev){
        ev.stopPropagation();
        ev.preventDefault();
        this.props.changeView(ev.target.dataset.view);
    }

    render(){

        let {leftCount, view, showClear, onClearCompleted} = this.props;

        let clearButton = null;

        if(showClear){

            clearButton = (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}>
                    清除完成项
                </button>
            );
        };

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{leftCount}</strong> items left
                </span>
                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            onClick={this.onClick}
                            data-view='all'
                            className={view==='all'? 'selected' : ''}>

                            All
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/active"
                            onClick={this.onClick}
                            data-view='active'
                            className={view==='active'? 'selected' : ''}>
                            Active
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/completed"
                            onClick={this.onClick}
                            data-view='completed'
                            className={view==='completed'? 'selected' : ''}>
                            Completed
                        </a>
                    </li>
                </ul>
                {clearButton}
            </footer>
        )
    }
}
