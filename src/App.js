import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import containers first
import Home from "./containers/Home";
import Offer from "./containers/Offer";
// Then import components
import Header from "./components/Header";

function App() {
   return (
      <Router>
         <Header />
         <Switch>
            <Route path="/offer/:_id">
               <Offer />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
