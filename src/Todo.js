import React from 'react';
import {useState} from 'react';
import {List,ListItem,ListItemAvatar,ListItemText,Button, Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },
}))

function Todo(props) {
    const classes = useStyles();
    const[input,setInput] = useState('');
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    } 

    const updateTodo = () =>{
        //update the todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
        todo:input
        },{merge:true});
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>I am modal</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event =>setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    
                    </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary={props.text} />
            </ListItem>
            <button onClick={e =>setOpen(true)}>Edit</button>     
             <DeleteForeverIcon onClick={ event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo;
