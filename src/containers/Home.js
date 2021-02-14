import { useState, useEffect } from "react";
import axios from "axios";

import OfferCard from "../components/OfferCard";

const Home = ({ data, setData, limit, setLimit, page, setPage }) => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://vinted-clone.herokuapp.com/offers`
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
      <div className="container loading-message">En cours de chargement...</div>
   ) : (
      <div className="container">
         {/* Cards of the offers */}
         <div className="offer-list">
            {data.offers ? ( // Avoid looping on an empty array (error)
               data.offers.map((offer) => {
                  return <OfferCard offer={offer} key={offer._id} />;
               })
            ) : (
               <div className="loading-message">
                  Aucun résultat pour votre recherche.
               </div>
            )}
         </div>

         {/* Nav at the bottom of the page */}
         <div className="page-nav">
            {page > 1 && (
               <span
                  onClick={() => {
                     setPage(page - 1);
                     console.log(page);
                  }}
               >
                  ← Page précédente
               </span>
            )}
            <div>
               Résultats par page :
               <span
                  onClick={() => {
                     setLimit(10);
                     console.log(page);
                  }}
               >
                  [10]
               </span>
               <span
                  onClick={() => {
                     setLimit(25);
                     console.log(page);
                  }}
               >
                  [25]
               </span>
               <span
                  onClick={() => {
                     setLimit(50);
                  }}
               >
                  [50]
               </span>
            </div>
            {page * limit < data.count && (
               <span
                  onClick={() => {
                     setPage(page + 1);
                  }}
               >
                  Page suivante →
               </span>
            )}
         </div>
      </div>
   );
};

export default Home;
