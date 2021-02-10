import { useState, useEffect } from "react";
import axios from "axios";

import OfferCard from "../components/OfferCard";

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
         <div className="offer-list">
            {data.offers.map((offer) => {
               return <OfferCard offer={offer} />;
            })}
         </div>
      </div>
   );
};

export default Home;
