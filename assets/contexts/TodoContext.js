import React, {createContext} from 'react';


export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'faire quelquechose'},
                {name: 'faire quelquechose'},
                {name: 'faire quelquechose'},
                {name: 'faire quelquechose'},
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

    updateTodo(){

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