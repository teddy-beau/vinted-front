import { useState, useEffect } from "react";
import axios from "axios";

import OfferCard from "../components/OfferCard";

const Home = ({ data, setData }) => {
   // const [data, setData] = useState([]);
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
   }, [setData]);

   return isLoading ? (
      <div>Loading...</div>
   ) : (
      <div className="container">
         <div className="offer-list">
            {data.offers ? ( // Avoid looping on an empty array (error)
               data.offers.map((offer) => {
                  return <OfferCard offer={offer} key={offer._id} />;
               })
            ) : (
               <span>Aucun résultats ne correspond à la recherche</span>
            )}
         </div>
      </div>
   );
};

export default Home;
