import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import containers first
import Home from "./containers/Home";
import Offer from "./containers/Offer";
// Then import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
   return (
      <Router>
         <Header />
         <Switch>
            <Route path="/offer/:_id">
               <Offer />
            </Route>
            <Route path="/">
               <Hero />
               <Home />
            </Route>
         </Switch>
         <Footer />
      </Router>
   );
}

export default App;
