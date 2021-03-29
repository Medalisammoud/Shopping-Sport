import { Switch, Route } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";



import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/Router/PriveRouter";
import { currentUser } from "./js/Action/actionUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route exact path="/" component={ Home } />
       <Route  path="/signup" component={ SignUp } />
       <Route  path="/signin" component={ SignIn } />
       <PrivateRoute path="/profile" component={Profile} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
