import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonalCare from './pages/PersonalCare';
import Vitamins from './pages/Vitamins';
import MedicalEquipments from './pages/MedicalEquipments';
import MomAndInfants from './pages/MomAndInfants';
import COVID19Essentials from './pages/COVID19Essentials';
import Homepage from './pages/Homepage';

function App() { 
  return(
    <Router>
    <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Homepage} loading='lazy' />
          <Route path="/personalcare" component={PersonalCare} />   
          <Route path="/vitamins" component={Vitamins} /> 
          <Route path="/medicalequipments" component={MedicalEquipments} />  
          <Route path="/momandinfants" component={MomAndInfants} />
          <Route path="/covid19essential" component={COVID19Essentials} />  
        </Switch>
    </div>
    </Router> 
  );
}

export default App;
