import Table from '@material-ui/core/Table'
import React, {useContext, useState, Fragment} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TableHead, TableCell, TableBody, Icon, IconButton, TextField, createStyles, withStyles, Box } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';

const styles = (theme) => createStyles( {
    thead: {
        backgroundColor: '#6646bd',
    },
    td: {
        padding: theme.spacing(5),
    },
    bold: {
        fontWeightBold: 500,
    },
    mt: {
        marginTop: '10px',
    },
});



function DevisConsult(props){

    const context = useContext(TodoContext);  
    const [editIsShown, setEditIsShown] = useState(false);
    const [editIsShown1, setEditIsShown1] = useState(false);
    const [editIsShown2, setEditIsShown2] = useState(false);
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
    
    //const classes = styles();

    const {classes} = props;
    
      
        return (
            <Fragment>
           
            <Table>
                <TableHead className={classes.thead}>
                    <TableRow>
                        <TableCell>Consulter ses devis</TableCell>
                        <TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/><TableCell/>
                        <TableCell></TableCell>
                
                <Button className={classes.mt} href="/pdf">Mes devis PDF</Button>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    <TableRow>
                        <TableCell>Intitulé du devis</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>Société</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Statut</TableCell>
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
  
                         
                    
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            

            </Fragment>
            );           
}


export default withStyles(styles)(DevisConsult);