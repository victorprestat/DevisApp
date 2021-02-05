import Table from '@material-ui/core/Table'
import React, {useContext, useState, Fragment} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TableHead, TableCell, TableBody, Icon, IconButton, TextField, createStyles, withStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import DeleteDialog from './DeleteDialog';
import { fontWeight } from '@material-ui/system';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => createStyles( {
    thead: {
        backgroundColor: '#db6f39',
    },
    td: {
        padding: theme.spacing(5),
    },
    bold: {
        fontWeightBold: 500,
    },
});



function DevisConsult(props){

    const context = useContext(TodoContext);  
    const [addTodo, setAddTodo] = useState(''); 
    const [addTodo1, setAddTodo1] = useState('');
    const [addTodo2, setAddTodo2] = useState('');
    const [addTodo3, setAddTodo3] = useState('');
    const [addTodo4, setAddTodo4] = useState('');
    const [addTodo5, setAddTodo5] = useState('');
    const [addTodo6, setAddTodo6] = useState('');
    const [addTodo7, setAddTodo7] = useState('');
    const [addTodo8, setAddTodo8] = useState('');
    const [addTodo9, setAddTodo9] = useState('');
    const [addTodo10, setAddTodo10] = useState('');
    const [addTodo11, setAddTodo11] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editIsShown1, setEditIsShown1] = useState(false);
    const [editIsShown2, setEditIsShown2] = useState(false);
    const [editIsShown3, setEditIsShown3] = useState(false);
    const [editIsShown4, setEditIsShown4] = useState(false);
    const [editIsShown5, setEditIsShown5] = useState(false);
    const [editIsShown6, setEditIsShown6] = useState(false);
    const [editIsShown7, setEditIsShown7] = useState(false);
    const [editIsShown8, setEditIsShown8] = useState(false);
    const [editIsShown9, setEditIsShown9] = useState(false);
    const [editIsShown10, setEditIsShown10] = useState(false);
    const [editIsShown11, setEditIsShown11] = useState(false);
    const [editIsShown12, setEditIsShown12] = useState(false);
    const [editTodo, setEditTodo] = useState('');   
    const [editTodo1, setEditTodo1] = useState('');  
    const [editTodo2, setEditTodo2] = useState('');
    const [editTodo3, setEditTodo3] = useState('');  
    const [editTodo4, setEditTodo4] = useState('');  
    const [editTodo5, setEditTodo5] = useState(''); 
    const [editTodo6, setEditTodo6] = useState(''); 
    const [editTodo7, setEditTodo7] = useState('');
    const [editTodo8, setEditTodo8] = useState('');
    const [editTodo9, setEditTodo9] = useState('');
    const [editTodo10, setEditTodo10] = useState('');
    const [editTodo11, setEditTodo11] = useState('');
    const [editTodo12, setEditTodo12] = useState('');
    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false); 
    const [todoToBeDeleted, setTodoToBeDeleted] = useState(null);  
    
    //const classes = styles();

    const {classes} = props;
    
      
        return (
            <Fragment>
            <form onSubmit={(event) => {
                context.createTodo(event, {name: addTodo, customer: addTodo1, company: addTodo2, cpclient: addTodo3, cpcompany: addTodo4, telclient: addTodo5, telcompany: addTodo6, inti1: addTodo7, montant1: addTodo8, inti2: addTodo9, montant2: addTodo10, montantTotal: addTodo11});
                }}>
            <Table>
                <TableHead className={classes.thead}>
                    <TableRow>
                        <TableCell>Gestion des devis</TableCell>
                        <TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    <TableRow>
                        <TableCell>Intitulé du devis</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>Société</TableCell>
                        <TableCell>Code postal du client</TableCell>
                        <TableCell>Code postal de l'entreprise</TableCell>
                        <TableCell>Numéro de téléphone du client</TableCell>
                        <TableCell>Numéro de téléphone de l'entreprise</TableCell>
                        <TableCell>Premiére ligne</TableCell>
                        <TableCell>Montant premiére ligne</TableCell>
                        <TableCell>Seconde ligne</TableCell>
                        <TableCell>Montant seconde ligne</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                    <TableRow key={'todo ' + index}>
                    <TableCell >
                    
                    {editIsShown === todo.id ?
                    <TextField value={editTodo} onChange={(event) => {setEditTodo(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, name: editTodo, customer: editTodo1, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.name
                    }
                    
                    
                    
                    
                    
                    </TableCell>
                    
                    

                    <TableCell>
                    
                    {editIsShown1 === todo.id ?
                    <TextField value={editTodo1} onChange={(event) => {setEditTodo1(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown1(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.customer
                    }
                    
                    </TableCell>

                    

                    <TableCell>
                    
                    {editIsShown2 === todo.id ?
                    <TextField value={editTodo2} onChange={(event) => {setEditTodo2(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown2(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.company
                    }
                    
                    </TableCell>


                    <TableCell>
                    
                    {editIsShown3 === todo.id ?
                    <TextField value={editTodo3} onChange={(event) => {setEditTodo3(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown3(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.cpclient
                    }
                    
                    </TableCell>

                    <TableCell>
                    
                    {editIsShown4 === todo.id ?
                    <TextField value={editTodo4} onChange={(event) => {setEditTodo4(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown4(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.cpcompany
                    }
                    
                    </TableCell>


                    <TableCell>
                    
                    {editIsShown5 === todo.id ?
                    <TextField value={editTodo5} onChange={(event) => {setEditTodo5(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown5(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.telclient
                    }
                    
                    </TableCell>

                    <TableCell>
                    
                    {editIsShown6 === todo.id ?
                    <TextField value={editTodo6} onChange={(event) => {setEditTodo6(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown6(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.telcompany
                    }
                    
                    </TableCell>

                    <TableCell>
                    
                    {editIsShown7 === todo.id ?
                    <TextField value={editTodo7} onChange={(event) => {setEditTodo7(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown7(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.inti1
                    }
                    
                    </TableCell>

                    <TableCell>
                    
                    {editIsShown8 === todo.id ?
                    <TextField value={editTodo8} onChange={(event) => {setEditTodo8(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown8(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.montant1
                    }
                    
                    </TableCell>

                    <TableCell>
                    
                    {editIsShown9 === todo.id ?
                    <TextField value={editTodo9} onChange={(event) => {setEditTodo9(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown9(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.inti2
                    }
                    
                    </TableCell>

                    <TableCell>
                    
                    {editIsShown10 === todo.id ?
                    <TextField value={editTodo10} onChange={(event) => {setEditTodo10(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown10(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.montant2
                    }
                    
                    </TableCell>

                    <TableCell>
                    {editIsShown11 === todo.id ?
                    <TextField value={editTodo11} onChange={(event) => {setEditTodo11(event.target.value)}}
                    InputProps={{
                        endAdornment: <Fragment>
                         <IconButton onClick={() => {context.updateTodo({id: todo.id, customer: editTodo1, name: editTodo, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                         setEditIsShown11(false);
                        }}></IconButton>
                        
                         </Fragment>,
                      }}
                      />

                        :
                    todo.montantTotal
                    }
                    
                    </TableCell>
                    <TableCell>




                        <TableCell>
                        {editIsShown12 === todo.id ?
                        <TextField value={editTodo12} onChange={(event) => {setEditTodo12(event.target.value)}} 
                        
                        InputProps={{
                            endAdornment: <Fragment>
                             <IconButton onClick={() => {context.updateTodo({id: todo.id, name: editTodo, customer: editTodo1, company: editTodo2, cpclient: editTodo3, cpcompany: editTodo4, telclient: editTodo5, telcompany: editTodo6, inti1: editTodo7, montant1: editTodo8, inti2: editTodo9, montant2: editTodo10, montantTotal: editTodo11, etat: editTodo12} );
                             setEditIsShown12(false);
                            }}><DoneIcon/></IconButton>
                            
                             </Fragment>,
                          }}
                        
                            />
                            :
                            todo.etat}
                           
                          </TableCell>

                    <Button color="primary" onClick={() => {setEditIsShown(todo.id); setEditIsShown1(todo.id); setEditIsShown2(todo.id); setEditIsShown3(todo.id); setEditIsShown4(todo.id); setEditIsShown5(todo.id); setEditIsShown6(todo.id); setEditIsShown7(todo.id); setEditIsShown8(todo.id); setEditIsShown9(todo.id); setEditIsShown10(todo.id); setEditIsShown11(todo.id); setEditIsShown12(todo.id); setEditTodo(todo.name); setEditTodo1(todo.customer); setEditTodo2(todo.company); setEditTodo3(todo.cpclient); setEditTodo4(todo.cpcompany); setEditTodo5(todo.telclient); setEditTodo6(todo.telcompany); setEditTodo7(todo.inti1); setEditTodo8(todo.montant1); setEditTodo9(todo.inti2); setEditTodo10(todo.montant2); setEditTodo11(todo.montantTotal); setEditTodo12(todo.etat)}}>Modifier le statut</Button>

                        <IconButton color="secondary" onClick={() => {setDeleteConfirmationIsShown(true); setTodoToBeDeleted(todo)}}><DeleteIcon></DeleteIcon></IconButton>
                         
                    </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </form>

            {deleteConfirmationIsShown && (
                <DeleteDialog todo={todoToBeDeleted} open={deleteConfirmationIsShown} setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}/>
            )}        
            

            </Fragment>
            );           
}


export default withStyles(styles)(DevisConsult);