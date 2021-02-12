import { Link, useHistory } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import logo from "../assets/images/vinted-logo.png";

const Header = ({ currentUser, userToken }) => {
   const history = useHistory(); // Handle redirect upon click

   return (
      <div className="container">
         <header>
            <Link to="/">
               <img src={logo} alt="Logo Vinted" />
            </Link>
            <SearchFilters />
            {!userToken && (
               <Link className="white-button" to="/signup">
                  S'inscrire
               </Link>
            )}
            {userToken ? (
               <div
                  className="red-button"
                  onClick={() => {
                     currentUser(null);
                     history.push("/");
                  }}
               >
                  Se deconnecter
               </div>
            ) : (
               <Link className="white-button" to="/login">
                  Se connecter
               </Link>
            )}
            <Link
               className="blue-button"
               to={userToken ? "/offer/publish" : "/login"}
            >
               Vends tes articles
            </Link>
         </header>
      </div>
   );
};

export default Header;
