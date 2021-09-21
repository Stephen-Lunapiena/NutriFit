//Manage at least some part of state with the useReducer and useContext hooks
//is routine restful?
//Your client-side application should handle the display of data with minimal data manipulation
 //Uses CSS to style your application


import './App.css';
import Nav from './Nav'
import About from './about'
import NutriApi from './nutriapi'
import FitApi from './fitapi'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      <Nav /> 
     <Switch>
     <Route path="/"  exact component={About} />
     <Route path="/about"   component={About} />
     <Route path="/nutriapi" component={NutriApi} />
     <Route path="/fitapi" component={FitApi} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
