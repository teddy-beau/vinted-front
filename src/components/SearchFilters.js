import { useState, useEffect } from "react";
import axios from "axios";
import PriceSlider from "./PriceSlider";

const SearchFilters = ({ setData }) => {
   const [searchInput, setSearchInput] = useState("");
   const [priceMin, setPriceMin] = useState(10);
   const [priceMax, setPriceMax] = useState(500);
   // const [sort, setSort] = useState(null);
   // const [skip, setSkip] = useState(0);
   // const [limit, setLimit] = useState(null);

   // API REQUEST
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://vinted-clone.herokuapp.com/offers?title=${searchInput}&priceMin=${priceMin}&priceMax=${priceMax}`
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert("An error occured while fetching the data");
         }
      };
      fetchData();
   }, [searchInput, priceMin, priceMax, setData]);

   return isLoading ? (
      <div>Loading...</div>
   ) : (
      <div>
         <div className="search-bar">
            <input
               type="search"
               placeholder="Rechercher des articles"
               value={searchInput}
               onChange={(event) => setSearchInput(event.target.value)}
            />
         </div>
         <div className="filters">
            <PriceSlider
               priceMin={priceMin}
               setPriceMin={setPriceMin}
               priceMax={priceMax}
               setPriceMax={setPriceMax}
            />
         </div>
      </div>
   );
};

export default SearchFilters;
