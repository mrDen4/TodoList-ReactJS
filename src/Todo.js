import './Todo.css';
import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'Сделать TodoList', complete: false},
        {id: 2, name: 'Сделать ДЗ с комментариями на ReactJS', complete: false}
      ],
      value: ''
    }
  }

  toggleTodo(key) {
    const todos = this.state.todos.map((todo) => {
      if (key === todo.id) {
        return {
          id: todo.id,
          name: todo.name,
          complete: !todo.complete
        }
      }
      else {
        return todo;
      }
    });

    this.setState({todos});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const todos = this.state.todos;
    const newTodo = {
      id: todos.length + 1,
      name: this.state.value,
      complete: false
    }

    event.preventDefault();
    todos.push(newTodo);
    this.setState({todos})
    this.setState({value: ''})
  }

  render() {
    return (
      <div className="todoList">
        <h1>Todo List</h1>
        <ul className="todoList__list">
          {
            this.state.todos.map((todo) => {
              return(
                <TodoItem 
                  id = {todo.id}
                  key = {todo.id}
                  name = {todo.name}
                  complete = {todo.complete}
                  toggleTodo = {this.toggleTodo.bind(this, todo.id)} />
              )
            })
          }
        </ul>
        <AddTodo 
          value = {this.state.value}
          handleChange = {this.handleChange.bind(this)}
          handleSubmit = {this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

export default Todo;
