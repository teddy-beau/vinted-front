import { Link } from "react-router-dom";
import logo from "../assets/images/vinted-logo.png";

const Header = () => {
   return (
      <div className="container">
         <header>
            <Link to="/">
               <img src={logo} alt="Logo Vinted" />
            </Link>
            <div className="search-bar">
               <input type="search" placeholder="Rechercher des articles" />
            </div>
            <button>S'inscrire</button>
            <button>Se connecter</button>
            <button>Vends tes articles</button>
         </header>
      </div>
   );
};

export default Header;
