import { Switch, Route } from "react-router-dom"

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';


import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route exact path="/" component={ Home } />
       <Route exact path="/signup" component={ SignUp } />
       <Route exact path="/signin" component={ SignIn } />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
