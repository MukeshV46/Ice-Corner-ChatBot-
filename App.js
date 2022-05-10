// import './App.css';
import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';



import Pres from './Dasher/Press';
import Dfot from './Dasher/DFoot';
import DNav from './Dasher/Navbar';
import Carose from './Dasher/car';
import About from './Dasher/Abou';
import Menu from './Dasher/Menu';
import ContactS from './Dasher/Contact';
import OrderDet from './Dasher/review';
  

function App() { // COMPON
  return (
    <> 
    <div className="App">
      {/* <header className='App-header'>
      
      </header> */}
    <Router>
    <DNav/>
      <Switch>
        <Route exact path="/">
          <Carose/>
          <About/>
          </Route>
        <Route path="/catring">
           Catring Page  
          <Menu/>
        </Route >
        
        
        <Route path="/Hour">
           hour Page 
          <Pres/>
        </Route>


        <Route path="/contact">
           Contact Page    
          <ContactS/>
        </Route>

        <Route path="/Order/:name">
           Order Page
          <OrderDet/>
        </Route>

      </Switch>
      <Dfot/>
    </Router>
    </div>      
    </>
    
  );
}

export default App;