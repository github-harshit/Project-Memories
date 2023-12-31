import {
   Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
    import memories from './images/memories.png';
import Posts  from "./components/posts/posts.js"; 
import Form  from "./components/form/form.js"
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
 import {useEffect} from 'react';
import {getPosts} from "./actions/posts"
 import { useState } from 'react';

function App() {
   const[ currentId, setCurrentId] = useState(null); // this is for update [currentId
   const dispatch = useDispatch();
  const classes = useStyles();
   useEffect(()=>{
     dispatch(getPosts()); 
   }, [dispatch, currentId]); 
  return ( 
  <>
     <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>
         <Grow in>
           <Container>
              <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>  <Posts setCurrentId={setCurrentId} />  </Grid>
                
                <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId} />  </Grid>
                </Grid>

            </Container>         
            </Grow>
      </Container>

   
    </>
  );
}

export default App;
