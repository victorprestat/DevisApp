import React, {createContext} from 'react';


export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'Devis 1', customer: "Jean Pierre", company: "Apple", cpclient: "92320", cpcompany: "75014", telclient:"0684562032", telcompany: "0675469582", inti1: "Concept", montant1: "500", inti2: "Production", montant2: "2000", montantTotal: "3300"},
                {id: 2, name: 'faire quelquechose', customer: "Jean Pierre"},
                {id: 3, name: 'faire quelquechose', customer: "Jean Pierre"},
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