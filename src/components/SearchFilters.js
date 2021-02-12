import { useState, useEffect } from "react";
import axios from "axios";

const SearchFilters = () => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const [searchInput, setSearchInput] = useState("");

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
      console.log(data);
   }, [searchInput]); // Penser aux dépendances

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
