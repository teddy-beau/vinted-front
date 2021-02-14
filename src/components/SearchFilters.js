import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PriceSwitch from "./search-filters/PriceSwitch";
import PriceSlider from "./search-filters/PriceSlider";

const SearchFilters = ({ setData, limit, page }) => {
   const location = useLocation();

   const [searchInput, setSearchInput] = useState("");
   const [priceMin, setPriceMin] = useState(0);
   const [priceMax, setPriceMax] = useState(500);
   const [sort, setSort] = useState("price-asc");

   // API REQUEST
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://vinted-clone.herokuapp.com/offers?title=${searchInput}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}&page=${page}&limit=${limit}`
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert("An error occured while fetching the data");
         }
      };
      fetchData();
   }, [searchInput, priceMin, priceMax, sort, setData, limit, page]);

   return isLoading ? (
      <div className="container loading-message">En cours de chargement...</div>
   ) : (
      <div>
         <div className="search-bar">
            <FontAwesomeIcon icon="search" />
            <input
               type="search"
               placeholder="Rechercher des articles"
               value={searchInput}
               onChange={(event) => setSearchInput(event.target.value)}
            />
         </div>
         {/* Filters hidden when not on path "/" */}
         {location.pathname === "/" && (
            <div className="filters">
               <PriceSwitch sort={sort} setSort={setSort} />

               <PriceSlider
                  setPriceMin={setPriceMin}
                  setPriceMax={setPriceMax}
               />
            </div>
         )}
      </div>
   );
};

export default SearchFilters;
