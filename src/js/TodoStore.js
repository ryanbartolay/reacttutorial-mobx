import { autorun, observable, computed } from "mobx"

class Todo {
    @observable value
    @observable id
    @observable complete

    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}
class TodoStore {
    @observable todos = []
    @observable filter = ""
    @computed get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incompleteTodos)
    }

    createTodo(value) {
        this.todos.push(new Todo(value))
    }

}

var store = window.store = new TodoStore

export default store

autorun(() => {
    console.log(store.filter)
    if (store.todos && store.todos.length > 0) {
        console.log(store.todos[0].value)
    }
})