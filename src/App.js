import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Menu from './Shared/Menu/Menu';
import Footer from './Shared/Footer/Footer';
import Login from './components/Login/Login'
import AuthProvider from './context/AuthProvider';
import PlaceOrders from './components/PlaceOrders/PlaceOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddBook from './components/AddBook/AddBook';
import MyBooks from './components/MyBooks/MyBooks';
import Rooms from './components/Rooms/Rooms';
import Contact from './components/Contact/Contact';
import ManageOrders from './components/ManageOrders/ManageOrders';





function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addBook'>
              <AddBook></AddBook>
            </Route>
            <Route path='/rooms'>
              <Rooms></Rooms>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/myBooks'>
              <MyBooks></MyBooks>
            </Route>
            <Route path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/placeOrders/:id'>
              <PlaceOrders></PlaceOrders>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
