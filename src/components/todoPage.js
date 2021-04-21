import React from 'react';
import { Paper, Typography} from "@material-ui/core";
import useStyles from "./styles";
import 'date-fns';
import TabBar from './tabPanel';
import { useStateValue } from "../store/configureStore";
import ADDTASKMODEL from './addTaskModel';
import '../compose.css';

const TODODETAILS = (props) => {
    const classes = useStyles();
    const todoDetailsArray = useStateValue();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" style={{right:'10%'}} >
                    {"Todo App"}
                </Typography>
                <span className={classes.taskButton + " circle"} onClick={handleClickOpen}>
                    <div className="vertical"></div>
                    <div className="horizontal"></div>
                </span>
                <ADDTASKMODEL open={open} isclose={handleClose} />
                {
                    (todoDetailsArray.todoDetailsArray.length > 0) ?
                        <TabBar addedRows={todoDetailsArray.todoDetailsArray} /> : null
                }
            </Paper>
        </div>
    );
}

export default TODODETAILS;