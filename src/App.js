import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
// Import containers first
import Home from "./containers/Home";
import Offer from "./containers/Offer";
// Then import components
import Header from "./components/Header";

function App() {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchData = async () => {
      try {
         const response = await axios.get(
            "https://vinted-clone.herokuapp.com/offers"
         );
         setData(response.data);
         setIsLoading(false);
      } catch (error) {
         alert("An error occured while fetching the data");
      }
   };

   useEffect(() => fetchData(), []);

   return isLoading ? (
      <div>Loading...</div>
   ) : (
      <Router>
         <Header />
         <Switch>
            <Route path="/offer/:_id">
               <Offer offers={data.offers} />
            </Route>
            <Route path="/">
               <Home data={data} />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
