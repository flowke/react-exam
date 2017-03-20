import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Footer from 'components/footer';
import Item from 'components/item';

import NewCom from 'components/newCom';

require('common/style/base.css');
require('common/style/index.css');

// let module = [];
let module = {
    todosData: []
};

class App extends Component{

    constructor(props){

        super(props);

        this.state = {
            view: 'all',
            inputVal: ''
        };

        this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onDestory = this.onDestory.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.changeView = this.changeView.bind(this);
        this.onClearCompleted = this.onClearCompleted.bind(this);
        this.editItemDone = this.editItemDone.bind(this);

    }

    handleKeyDownPost(ev){
        ev.stopPropagation();

        // this.handleChange(ev);

        if(ev.keyCode !== 13) return;


        let val = this.state.inputVal.trim();
        if (!val) return;


        let newTodo = {};
        newTodo.id = new Date().getTime();
        newTodo.value = val;
        newTodo.hasCompleted = false;

        this.props.module.todosData.push(newTodo);

        this.setState({inputVal: ''});

    }

    // 让组件受控
    handleChange(ev){

        this.setState({inputVal: ev.target.value});
    }

    // 全选
    toggleAll(ev){
        let {checked} = ev.target;

        this.props.module.todosData.forEach((elt)=>{
            elt.hasCompleted = checked;
        });

        this.forceUpdate();
    }

    // item对勾改变
    onToggle(todo){

        this.props.module.todosData.forEach((elt)=>{
            if( elt.id === todo.id){
                elt.hasCompleted = !elt.hasCompleted;
            }
        });

        this.forceUpdate();
    }

    // 删除一个
    onDestory(todo){

        let {todosData} = this.props.module;

        this.props.module.todosData = todosData.filter((elt)=>{
            return elt.id !== todo.id;
        });

        this.forceUpdate();
    }

    // 更改内容
    editItemDone(todo, value){
        let {todosData} = this.props.module;

        // todosData.forEach((elt)=>{
        //     if( elt.id === todo.id ){
        //         elt.value = todo.value;
        //     }
        // });

        this.forceUpdate();
    }

    // 切换视图
    changeView(view){

        this.setState({view})
    }

    // 清除完成项
    onClearCompleted(ev){

        ev.stopPropagation();
        ev.preventDefault();

        let {todosData} = this.props.module;

        this.props.module.todosData = todosData.filter((elt)=>{
            return !elt.hasCompleted;
        });

        this.forceUpdate();
    }

    render(){

        let {view} = this.state;

        let { todosData } = this.props.module;

        let itemsBox = null,
            footer = null,
            items = null;

        let leftCount = todosData.length;

        items = todosData.filter( (elt)=>{

            if( elt.hasCompleted ) leftCount--;

            switch (view) {
                case 'active':
                    return !elt.hasCompleted;
                    break;

                case 'completed':
                    return elt.hasCompleted;
                    break;

                default:
                    return true;

            }
        } );

        items = items.map((elt)=>{

            let itemProps = {
                key: elt.id,
                hasCompleted: elt.hasCompleted,
                onToggle: this.onToggle,
                onDestory: this.onDestory,
                todo: elt,
                editItemDone: this.editItemDone
            };

            return <Item {...itemProps}/>
        });

        if(items.length){
            itemsBox = (
                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        onChange={this.toggleAll}
                        checked={leftCount===0}
                    />
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
            );
        }

        if(todosData.length){

            let props = {
                leftCount,
                view,
                changeView: this.changeView,
                showClear: todosData.length > leftCount,
                onClearCompleted: this.onClearCompleted
            };

            footer = (<Footer {...props}/>);
        }

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={this.state.inputVal}
                        onKeyDown={this.handleKeyDownPost}
                        onChange={this.handleChange}
                        autoFocus={true}
                    />
                </header>

                {itemsBox}

                {footer}

                <NewCom/>
            </div>
        );


    }
}

ReactDOM.render(
    // <div>Hello React</div>,
    <App module={module}/>,
    document.getElementById('box')
);

if (module.hot){
    module.hot.accept()
}
