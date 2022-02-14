//import logo from './logo.svg';
import './App.css';
import {Switch,Route, Redirect} from "react-router-dom";
import Home from './All component/Home';
import Contact from './All component/Contact';
import Navbar from './All component/Navbar';
import About from "./All component/About";
import Login from "./All component/Login";
import SignUp from "./All component/Signup";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path ="/"><Home/></Route>
    <Route exact path ="/contact"><Contact/></Route>
    <Route exact path ="/about"><About/></Route>
    <Route exact path ="/login"><Login/></Route>
    <Route exact path ="/Signup"><SignUp/></Route>
    <Redirect to="/"/>
    </Switch>
       </>
  );
}

export default App;
