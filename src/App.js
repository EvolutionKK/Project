import './App.css';
import Home from './Components/Home';
import Next from './Components/Next';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/get">
            <Next />
          </Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
