import React, {createContext} from 'react';
import axios from 'axios';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.readTodo();
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
            axios.get('/api/todo/read')
            .then(response => {
                this.setState({
                    todos: response.data,
                });
            }).catch(error => {
                console.error(error);
            })
    }

    updateTodo(data){
        let todos = [...this.state.todos];
        let todo = todos.find(todo => {
            return todo.id === data.id;
        })

        todo.customer = data.customer;
        todo.name = data.name;
        todo.company = data.company;
        todo.cpclient = data.cpclient;
        todo.cpcompany = data.cpcompany;
        todo.telclient = data.telclient;
        todo.telcompany = data.telcompany;
        todo.inti1 = data.inti1;
        todo.montant1 = data.montant1;
        todo.inti2 = data.inti2;
        todo.montant2 = data.montant2;
        todo.montantTotal = data.montantTotal;
        

        this.setState({
            todos: todos,
        });
    }

    deleteTodo(data){
        let todos = [...this.state.todos];
        let todo = todos.find(todo => {
            return todo.id === data.id;
        });

        todos.splice(todos.indexOf(todo), 1);

        this.setState( {
            todos: todos,
        });
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