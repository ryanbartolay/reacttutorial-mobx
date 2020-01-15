import { autorun, observable, computed } from "mobx"

class TodoStore {
    @observable todos = ["buy milk", "buy eggs"]
    @observable filter = ""
    @computed get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
    }
}

var store = window.store = new TodoStore

export default store

autorun(() => {
    console.log(store.filter)
    console.log(store.todos[0])
})