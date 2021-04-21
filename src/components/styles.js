import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height:'auto',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        paddingBottom: theme.spacing(5),
        margin: 'auto',
        width: '100%',
        marginBottom: theme.spacing(2),
        maxWidth: '90%',
        boxShadow: 'none',
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(1.5),
        },
    },
    taskButton:{
        margin: 0,
        top: 'auto',
        right: 20,
        top: 1,
        left: 'auto',
        position: 'fixed',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    display:{
        display:'flex',
        margin: '5px',
    },
    selectPadding:{
        paddingTop:'40px',
        marginLeft:'20px',
        marginRight:'20px'
    },
    dateMargin:{
        marginLeft:'60%'
    },
    selectLabelMargin:{
        marginBottom:'-14px'
    },
    descLabel:{
        marginBottom:'20px'
    },
    table: {
        minWidth: 750,
        
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
      todoCompleted: {
        textDecorationLine: "line-through"
      },
      headerBG: {
        backgroundColor: "grey",
        textAlign:'center',
      }

}))

export default useStyles