import Table from '@material-ui/core/Table'
import React, {useContext, useState, Fragment} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TableHead, TableCell, TableBody, Icon, IconButton, TextField } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';


function TodoTable(){

    const context = useContext(TodoContext);  
    const [addTodo, setAddTodo] = useState(''); 
    const [editIsShown, setEditIsShown] = useState(false);
    const [editTodo, setEditTodo] = useState('');   
      
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
                    <TableCell>
                    
                    {editIsShown === todo.id ?
                    <TextField value={editTodo} onChange={(event) => {setEditTodo(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, name: editTodo} );
                         setEditIsShown(false);
                        }}><DoneIcon/></IconButton>
                        <IconButton onClick={() => {setEditIsShown(false)}}><CancelIcon/></IconButton>
                         </Fragment>,
                      }}
                      />

                        :
                    todo.name
                    }
                    
                    
                    
                    
                    
                    </TableCell>
                    <TableCell>



                        <IconButton onClick={() => {setEditIsShown(todo.id); setEditTodo(todo.name)}}><EditIcon></EditIcon></IconButton>



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