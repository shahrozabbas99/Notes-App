import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Container,createTheme, ThemeProvider } from "@material-ui/core";

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from './pages/NotePage'


import './App.css';


function App() {

  return (
    <Router >
     
    <Container fixed className='dark'>
    
      <div className="app" >
      <Header />
      <Route component={NotesPage} path="/" exact  />
      <Route component={NotePage} path="/note/:id" />
    
      </div>
      </Container>
     
    </Router>
  );
}

export default App;
