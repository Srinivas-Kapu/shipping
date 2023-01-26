import logo from './logo.svg';
import './App.css';
import DistanceCalculator from './DistanceCalculator'
import ShipperData from './ShipperData';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/distance-calculator' element={< DistanceCalculator />}></Route>
                 <Route exact path='/shipper-data' element={< ShipperData />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
