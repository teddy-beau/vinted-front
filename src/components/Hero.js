import heroBanner from "../assets/images/hero-banner.jpeg";
import tearHero from "../assets/images/tear-hero.svg";

const Hero = () => {
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
               <div className="blue-button">Commencer à vendre</div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
