import React from 'react';

const TodoItem = (props) => {
    console.log(props);
    const complete = props.complete ? 'todoList__item--done' : '';

    return (
        <li 
            className={"todoList__item " + complete} 
            onClick={props.toggleTodo}>
            <p className="todoList__text">{props.name}</p>
        </li>
    )
}

export default TodoItem;