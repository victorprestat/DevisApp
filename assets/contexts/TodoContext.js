import React, {createContext} from 'react';
import axios from 'axios';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: {},
        };
        this.readTodo();
    }


    createTodo(event, todo) {

         event.preventDefault();
        axios.post('/api/todo/create', todo)
        .then(response => {
            if(response.data.message.level === 'success'){
            let data = [...this.state.todos];
            data.push(response.data.todo);
            this.setState({
                todos: data,
                message: response.data.message,
            });
        } else {
            this.setState({
                message: response.data.message,
            });
        }
        }).catch(error =>{
            console.error(error);
        })

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
        axios.put('/api/todo/update/' + data.id, data)
            .then( response => {
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
            }).catch(error =>{
                console.log(error);
            })
    }

    deleteTodo(data){
        axios.delete('/api/todo/delete/' + data.id)
        .then(response => {
                //message
            let todos = [...this.state.todos];
            let todo = todos.find(todo => {
                return todo.id === data.id;
            });

            todos.splice(todos.indexOf(todo), 1);

            this.setState( {
                todos: todos,
            });
        }).catch(error =>{
            console.log(error);
        });
    }


    render(){
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
                setMessage: (message) => this.setState({message: message}),
            }}>

                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;