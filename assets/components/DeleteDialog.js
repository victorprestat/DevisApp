import React, { useContext } from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { TodoContext } from '../contexts/TodoContext';

function DeleteDialog(props) {

    const hide = () => {
        props.setDeleteConfirmationIsShown(false);
    };
    const context = useContext(TodoContext);
    return(
        <Dialog onClose={hide} fullWidth={true} maxWidth='sm'open={props.open}>
            <DialogTitle>
                Voulez vous supprimer le devis ci-dessous ?
            </DialogTitle>
            <DialogContent>
                {props.todo.name}
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Annuler</Button>
                <Button onClick={()=> {context.deleteTodo({id: props.todo.id, name: props.todo.name}); hide();}}>Supprimer</Button>
            </DialogActions> 
        </Dialog>
    );
}

DeleteDialog.protoTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    todo: PropTypes.shape = ({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
};
export default DeleteDialog;