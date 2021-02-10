import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = ({ data }) => {
   return (
      <div className="container">
         <div>
            Home <Link to="/offer">Go to offer</Link>
         </div>
         <Hero />
         <div className="offer-list">
            {data.offers.map((offer) => {
               return (
                  <Link to={`/offer/:${offer._id}`}>
                     <div className="offer-card" key={offer._id}>
                        <div>
                           <img
                              src={offer.owner.account.avatar.secure_url}
                              alt="User"
                           />
                           <div>{offer.owner.account.username}</div>
                        </div>
                        {/* Problème avec l'enregistrement des images en tableau */}
                        <img
                           src={
                              offer.product_image[0].picture1
                                 ? offer.product_image[0].picture1.secure_url
                                 : offer.product_image[1].picture1.secure_url
                           }
                           alt="Product"
                        />
                        <div>
                           <div>
                              <div>Price</div>
                              <div>Size</div>
                              <div>Brand</div>
                           </div>
                           <div>
                              <div>Likes</div>
                              <div>Boost</div>
                           </div>
                        </div>
                     </div>
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Home;
