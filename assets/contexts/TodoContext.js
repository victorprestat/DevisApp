import React, {createContext} from 'react';


export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'faire quelquechose'},
                {id: 2, name: 'faire quelquechose'},
                {id: 3, name: 'faire quelquechose'},
                {id: 4, name: 'faire quelquechose'},
        ],
        };
    }


    createTodo(event, todo) {

         event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState({
            todos: data,
        });

    }

    readTodo(){

    }

    updateTodo(data){
        let todos = [...this.state.todos];
        let todo = todos.find(todo => {
            return todo.id === data.id;
        })

        todo.name = data.name;

        this.setState({
            todos: todos,
        });
    }

    deleteTodo(){

    }


    render(){
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>

                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;