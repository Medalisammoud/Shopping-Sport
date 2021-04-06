import { Switch, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



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
import { getAllProduct } from "./js/Action/actionProduct";
import { getAllCategory } from "./js/Action/actionCategory";
import ListProduct from "./components/Products/ListProduct/ListProduct";

function App() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.categoryReducer.categorys)
  const [categoryData, setCategoryData] = useState([])
  useEffect(() => {
    dispatch(currentUser());
    dispatch( getAllProduct());
    dispatch(getAllCategory());
    setCategoryData(category);
  }, [dispatch,category]);
  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route exact path="/" component={ Home } />
       <Route  path="/signup" component={ SignUp } />
       <Route  path="/signin" component={ SignIn } />
       <PrivateRouteUser path="/profile" component={Profile} />
       <PrivateRouteAdmin path="/admin" component={Admin} />
       {
         categoryData.map(ctg => <Route  path={`/${ctg.categoryName}`} key={ctg._id}>
           <ListProduct id={ctg._id} /> 
           </Route>)
       }
       <Route path="/*" component={Errors404} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
