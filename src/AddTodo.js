import React from 'react'

const AddTodo = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className="todoList__addTodo">
        <input type='text' 
          placeholder='Добавить новую задачу' 
          value={props.value} 
          onChange={props.handleChange}
          className="addTodo__input"></input>
        <input type='submit' value='Добавить' className="addTodo__btn"></input>
      </form>
    )
}

export default AddTodo;