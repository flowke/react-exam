import React, {PropTypes, Component} from 'react';

export default class Item extends Component{

    constructor(props){
        super(props);

        this.state = {
            editText: '',
            inEditing: false
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onDestory = this.onDestory.bind(this);
        this.enterDone = this.enterDone.bind(this);
        this.blurDone = this.blurDone.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEdit(){

        this.setState({
            editText: this.props.todo.value,
            inEditing: true
        }, ()=>{
            this.refs.editField.focus();
        } );
    }

    enterDone(ev){

        let {todo, editItemDone} = this.props;
        todo.value = ev.target.value;

        if( ev.keyCode!==13 ) return;

        this.setState({inEditing: false});
        editItemDone();

    }

    blurDone(ev){

        console.log('fdjkh');

        // let {todo, editItemDone} = this.props;
        // todo.value = ev.target.value;
        //
        this.setState({inEditing: false});
        // editItemDone();

    }

    handleChange(ev){

        this.setState({editText: ev.target.value});

    }


    onToggle(){

        let {todo, onToggle} = this.props;
        this.props.onToggle(todo);

    }

    onDestory(){
        let {todo, onToggle} = this.props;
        this.props.onDestory(todo);
    }

    render(){

        let {hasCompleted, onChangeVal, todo} = this.props;

        let liClassName = '';

        if(hasCompleted) liClassName += 'completed ';

        if(this.state.inEditing) liClassName += 'editing ';

        return (
            <li className={liClassName}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={hasCompleted}
                        onChange={this.onToggle}
                    />
                    <label onDoubleClick={this.handleEdit}>
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={this.onDestory} />
                </div>
                <input
                    ref="editField"
                    className="edit"
                    value={this.state.editText}
                    onBlur={this.blurDone}
                    onChange={this.handleChange}
                    onKeyDown={this.enterDone}
                />
            </li>
        );
    }
}
