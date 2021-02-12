import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";
import Cookies from "js-cookie";

// Import containers first
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";

// Then import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
   const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

   const [data, setData] = useState([]);

   const currentUser = (token) => {
      if (token) {
         // Log in >> create a cookie
         Cookies.set("userToken", token, { expires: 365 });
         setUserToken(token);
      } else {
         // Log out >> remove the cookie
         Cookies.remove("userToken");
         setUserToken(null);
      }
   };

   return (
      <Router>
         <Header
            userToken={userToken}
            currentUser={currentUser}
            setData={setData}
         />
         <Switch>
            <Route path="/offer/:_id">
               <Offer />
            </Route>
            <Route path="/signup">
               <SignUp currentUser={currentUser} />
            </Route>
            <Route path="/login">
               <Login currentUser={currentUser} />
            </Route>
            <Route path="/">
               <Hero />
               <Home data={data} setData={setData} />
            </Route>
         </Switch>
         <Footer />
      </Router>
   );
}

export default App;
