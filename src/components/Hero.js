import heroBanner from "../assets/images/hero-banner.jpeg";

const Hero = () => {
   return (
      <div className="hero-banner">
         <img src={heroBanner} alt="Banner" />
         <div className="container">
            <div>
               <h1>Prêts à faire du tri dans vos placards ?</h1>
               <div>Commencer à vendre</div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
