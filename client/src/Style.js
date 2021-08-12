import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'red !important',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
   forget:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"16px",
  }
  ,
  yo:{
    color: "blue",
    backgroundColor: "transparent",
    textDecoration: "none",
    "&:hover": {
      color: "red",
      textDecoration: "underline",  
    }
  }
}));