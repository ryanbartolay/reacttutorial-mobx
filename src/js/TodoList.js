import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if(e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  inputFilter(e) {
    this.props.store.filter = e.target.value
  }

  toggleTodo = (e, todo) => {
    console.log(e.target.value)
    todo.complete = !todo.complete
  }

  render() {
    const { todos, filteredTodos, filter } = this.props.store
    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" value={todo.complete} onChange={(e) => this.toggleTodo(e, todo)} checked={todo.complete} />{todo.value}</li>
    ))
    return <div>
      <h1>Todos</h1>
      <input className="create" onKeyPress={this.createNew.bind(this)} />
      <input className="filter" value={filter} onChange={this.inputFilter.bind(this)} />
      <ul>{todoLis}</ul>
    </div>
  }
}
