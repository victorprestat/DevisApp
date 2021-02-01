import Table from '@material-ui/core/Table'
import React, {useContext, useState} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TableHead, TableCell, TableBody, Icon, IconButton, TextField } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

function TodoTable(){

    const context = useContext(TodoContext);  
    const [addTodo, setAddTodo] = useState('');      

        return (
            <form onSubmit={(event) => {
                context.createTodo(event, {name: addTodo});
                }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField value={addTodo} onChange={(event) => {
                                setAddTodo(event.target.value);
                                }} label="Votre Nom et Prénom"/>
                        </TableCell>
                        <TableCell>
                            <IconButton type="submit">
                                <AddIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                    <TableRow key={'todo ' + index}>
                    <TableCell>{todo.name}</TableCell>
                    <TableCell>
                        <IconButton><EditIcon></EditIcon></IconButton>
                        <IconButton><DeleteIcon></DeleteIcon></IconButton>
                    </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </form>
            );           
}

export default TodoTable;