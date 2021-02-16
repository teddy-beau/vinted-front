import "./App.scss";
import "./assets/styles/media-queries.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import containers first
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Publish from "./containers/Publish";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Checkout from "./containers/Checkout";

// Then import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faCaretUp,
   faCaretDown,
   faTimesCircle,
   faSearch,
   faPlusCircle,
   faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(
   faCaretUp,
   faCaretDown,
   faTimesCircle,
   faSearch,
   faPlusCircle,
   faCheckCircle
);

function App() {
   const [userToken, setUserToken] = useState(Cookies.get("userToken") || null); // For auth
   const [data, setData] = useState([]); // From API request
   const [page, setPage] = useState(1); // For page nav
   const [limit, setLimit] = useState(25); // For page nav

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
            limit={limit}
            page={page}
         />
         <Switch>
            <Route path="/offer/publish">
               <Publish userToken={userToken} />
            </Route>
            <Route path="/offer/:_id">
               <Offer userToken={userToken} />
            </Route>
            <Route path="/checkout">
               <Checkout />
            </Route>
            <Route path="/signup">
               <SignUp currentUser={currentUser} />
            </Route>
            <Route path="/login">
               <Login currentUser={currentUser} />
            </Route>
            <Route path="/">
               <Hero userToken={userToken} />
               <Home
                  data={data}
                  setData={setData}
                  limit={limit}
                  setLimit={setLimit}
                  page={page}
                  setPage={setPage}
               />
            </Route>
         </Switch>
         <Footer />
      </Router>
   );
}

export default App;
