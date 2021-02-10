import { Link } from "react-router-dom";
import logo from "../assets/images/vinted-logo.png";

const Header = () => {
   return (
      <header className="container">
         <Link to="/">
            <img src={logo} alt="Logo Vinted" />
         </Link>
         <div className="search-bar">
            <input type="search" />
         </div>
         <button>S'inscrire</button>
         <button>Se connecter</button>
         <div>Vends tes articles</div>
      </header>
   );
};

export default Header;
