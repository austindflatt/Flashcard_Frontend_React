import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FixedMenuLayout from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Container } from 'semantic-ui-react'

const App = () => {


  return (
    
    <div className="App">
      <Router>
      <FixedMenuLayout />
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/card-collections'>
        
      </Route>
      <Route path='/cards'>
        
      </Route>
      </Router>
      
    </div>
  );
}

export default App;