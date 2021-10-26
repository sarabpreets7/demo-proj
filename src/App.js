import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
      </Router>
    </div>
  );
}

export default App;
