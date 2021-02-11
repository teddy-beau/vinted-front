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
            <Link to="/signup">S'inscrire</Link>
            <Link to="/login">Se connecter</Link>
            <Link>Vends tes articles</Link>
         </header>
      </div>
   );
};

export default Header;
