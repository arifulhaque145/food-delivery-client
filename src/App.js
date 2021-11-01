import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import DeliveryProvider from "./Context/DeliveryProvider";
import Admin from "./Pages/Admin";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Order from "./Pages/Order";
import PlaceOrder from "./Pages/PlaceOrder";
import Register from "./Pages/Register";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <DeliveryProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </DeliveryProvider>
    </AuthProvider>
  );
}

export default App;
