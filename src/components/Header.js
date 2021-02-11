import { Link } from "react-router-dom";
import logo from "../assets/images/vinted-logo.png";

const Header = ({ currentUser, userToken }) => {
   return (
      <div className="container">
         <header>
            <Link to="/">
               <img src={logo} alt="Logo Vinted" />
            </Link>
            <div className="search-bar">
               <input type="search" placeholder="Rechercher des articles" />
            </div>
            {!userToken && (
               <Link className="white-button" to="/signup">
                  S'inscrire
               </Link>
            )}
            {!userToken && (
               <Link className="white-button" to="/login">
                  Se connecter
               </Link>
            )}
            {userToken && (
               <div className="red-button" onClick={() => currentUser(null)}>
                  Se deconnecter
               </div>
            )}

            <Link className="blue-button" to="/">
               Vends tes articles
            </Link>
         </header>
      </div>
   );
};

export default Header;
