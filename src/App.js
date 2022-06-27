import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonalCare from './pages/PersonalCare';
import Vitamins from './pages/Vitamins';
import MedicalEquipments from './pages/MedicalEquipments';
import MomAndInfants from './pages/MomAndInfants';
import COVID19Essentials from './pages/COVID19Essentials';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import {CartProvider} from "react-use-cart";
import Cart from "./pages/Cart"


function App() { 
  return(
    <BrowserRouter>
    <CartProvider>
    
    <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} loading='lazy' />
          <Route path="/personalcare" component={PersonalCare} />   
          <Route path="/vitamins" component={Vitamins} /> 
          <Route path="/medicalequipments" component={MedicalEquipments} />  
          <Route path="/momandinfants" component={MomAndInfants} />
          <Route path="/covid19essential" component={COVID19Essentials} />  
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          
        </Switch>
    </div>
    </CartProvider>
    </BrowserRouter> 
  );
}

export default App;
