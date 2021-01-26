import React from 'react';
import { Container, Grid} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} xs={12} md={3} sm={12} style = {{ backgroundColor: 'red'}}>
          <Profile />
        </Grid>
        <Grid item xs style = {{ backgroundColor: 'blue'}}>
          <Header />
            <Router>
              <Switch>
                <Route path ="/portfolio">
                  <Portfolio />
                </Route>
                <Route path ="/">
                  <Resume/>
                </Route>
              </Switch>
            </Router>
          

          <Footer />
        </Grid>
      </Grid>      
    </Container>
  );
}

export default App;
