import { Switch, Route } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";



import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import PrivateRouteUser from "./components/Router/PrivateRouteUser";
import { currentUser } from "./js/Action/actionUser";
import Errors404 from "./components/PageNotFound/Errors404";
import Admin from "./components/Admin/Admin";
import PrivateRouteAdmin from "./components/Router/PrivateRouteAdmin";

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
       <PrivateRouteUser path="/profile" component={Profile} />
       <PrivateRouteAdmin path="/admin" component={Admin} />
       <Route path="/*" component={Errors404} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
