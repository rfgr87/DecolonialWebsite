import React from 'react';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Composers from '../components/Composers';
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import QuienesSomos from '../components/QuienesSomos';
import Blog2 from '../components/Blog2';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Switch} from 'react-router-dom';
import ForumContainer from '../containers/ForumContainer'





const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
  
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    div: {
      justifyContent: 'center'
    }
  }));



  const HeaderToolbar = () => {

    const classes = useStyles();


    return (
      <div>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Link to='/quienessomos'>  Quienes Somos  </Link>
        <Link to='/compositores'>  Compositores  </Link>
        <Link to='/blog'>  Blog  </Link>
        <Link to='/forum'>  Forum  </Link>
        </Toolbar>   
        <Switch>
        <Route exact path='/quienessomos'> <QuienesSomos/></Route>
        <Route exact path='/compositores'> <Composers/></Route>
        <Route exact path='/composer1'> <Composer1/></Route>
        <Route exact path='/composer2'> <Composer2/></Route>
        <Route exact path='/blog'> <Blog2/></Route>
        <Route exact path='/forum'> <ForumContainer/></Route>
        </Switch>
        </div>
        

    )
  }

  
export default HeaderToolbar