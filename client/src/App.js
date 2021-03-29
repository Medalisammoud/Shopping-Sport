import { Switch, Route } from "react-router-dom"

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';


import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import './App.css';
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route exact path="/" component={ Home } />
       <Route  path="/signup" component={ SignUp } />
       <Route  path="/signin" component={ SignIn } />
       <Route  path="/profile" component={ Profile } />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
