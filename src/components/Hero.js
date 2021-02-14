import heroBanner from "../assets/images/hero-banner.jpeg";
import tearHero from "../assets/images/tear-hero.svg";
import { Link } from "react-router-dom";

const Hero = ({ userToken }) => {
   return (
      <div className="hero-banner">
         <img className="main-img" src={heroBanner} alt="Banner" />
         <img
            className="tear-img"
            src={tearHero}
            alt="Teared of paper effect"
         />
         <div className="container">
            <div>
               <h1>Prêts à faire du tri dans vos placards ?</h1>
               <Link
                  className="blue-button-dark"
                  to={userToken ? "/offer/publish" : "/login"}
               >
                  Commencer à vendre{" "}
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Hero;
