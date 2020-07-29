import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return(
    <Grid container>
      <Grid item xs={11}>
        <Paper className={classes.paper}>Web A to Z</Paper>
      </Grid>
      <Grid item xs={1}>
        <Button size="small" variant="outlined" onClick={()=>history.push('/users/login')}>
            Login
        </Button>
        <Button size="small" variant="outlined" onClick={()=>history.push('/users/join')}>
            Signup
        </Button>
      </Grid>
    </Grid>
  );
} 

export default Header;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));