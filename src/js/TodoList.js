import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {
  inputFilter(e) {
    this.props.store.filter = e.target.value
  }

  render() {
    const { todos, filter } = this.props.store
    const todoLis = todos.map(todo => (
      <li>{todo}</li>
    ))
    return <div>
      <h1>{filter}</h1>
      <input className="filter" value={filter} onChange={this.inputFilter.bind(this)} />
      <ul>{todoLis}</ul>
    </div>
  }
}
