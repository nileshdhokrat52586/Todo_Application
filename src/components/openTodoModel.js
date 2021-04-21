import React from 'react';
import {
    Button,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from "@material-ui/core";
import useStyles from "./styles";
import 'date-fns';
import { useStateValue} from "../store/configureStore";

const TodoDescModel = (props) => {
  const classes = useStyles();
  const editTodo = useStateValue();
  const handleCloseTodo = () => {
    props.iscloseTodo();
  };
  return (
    <Dialog visible={props.visible} open={props.openTodo} onClose={handleCloseTodo} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">TODO Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Todo Details
          </DialogContentText>
        <div className={classes.display}>
          <ul>
            <li>Summary : {editTodo.editTodo.summary}</li>
            <li>Description : {editTodo.editTodo.description}</li>
            <li>Priority : {editTodo.editTodo.priority}</li>
            <li>Due Date : {editTodo.editTodo.dueDate}</li>
            <li>Created On : {editTodo.editTodo.createdOn}</li>
            <li>Current Status : {editTodo.editTodo.currentStatus ? "Completed" : "Pending"}</li>
          </ul>
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseTodo} style={{backgroundColor: 'yellow'}}>
          Okay
          </Button>
      </DialogActions>
    </Dialog>

  );
}

export default TodoDescModel;