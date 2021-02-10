import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../components/Hero";

const Home = () => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               "https://vinted-clone.herokuapp.com/offers"
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert("An error occured while fetching the data");
         }
      };
      fetchData();
   }, []);

   return isLoading ? (
      <div>Loading...</div>
   ) : (
      <div className="container">
         <div>
            Home <Link to="/offer">Go to offer</Link>
         </div>
         <Hero />
         <div className="offer-list">
            {data.offers.map((offer) => {
               return (
                  <Link to={`/offer/${offer._id}`}>
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
