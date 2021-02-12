import { useState, useEffect } from "react";
import axios from "axios";

const SearchFilters = ({ data, setData }) => {
   const [searchInput, setSearchInput] = useState("");

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://vinted-clone.herokuapp.com/offers?title=${searchInput}`
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert("An error occured while fetching the data");
         }
      };
      fetchData();
   }, [searchInput, setData]);

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
         <div className="filters">Filters</div>
      </div>
   );
};

export default SearchFilters;
