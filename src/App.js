import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FixedMenuLayout from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import CardCollections from './components/Collection/Collection';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import { Container, Divider } from 'semantic-ui-react'
import AppFunctions from './requests';

const App = () => {


  return (
    
    <div className="App">
      <Router>
      <FixedMenuLayout />
      <Divider /><Divider /><Divider /><Divider /><Divider />
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/card-collections'>
      <CardCollections />
      </Route>
      <Route path='/cards'>
      <Cards/>
      </Route>
      </Router>
      
    </div>
  );
}

export default App;