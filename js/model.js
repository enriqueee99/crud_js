export default class Model{
    constructor() {
        this.view = null;
        this.todos = [];
    }

    setView(view){
        this.view = view;
    }

    setTodos(){
        return this.todos;
    }

    addTodo(title, desctiption){
        console.log(title, desctiption)
    }
}