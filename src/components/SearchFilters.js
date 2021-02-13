import { useState, useEffect } from "react";
import axios from "axios";
import PriceSwitch from "./SearchFilters/PriceSwitch";
import PriceSlider from "./SearchFilters/PriceSlider";
// import ResultsPerPage from "./SearchFilters/ResultsPerPage";

const SearchFilters = ({ setData, limit, page }) => {
   const [searchInput, setSearchInput] = useState("");
   const [priceMin, setPriceMin] = useState(0);
   const [priceMax, setPriceMax] = useState(500);
   const [sort, setSort] = useState("price-asc");

   // const [limit, setLimit] = useState(25);

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
            <span>Trier&nbsp;par prix&nbsp;:</span>
            <div>
               <PriceSwitch sort={sort} setSort={setSort} />
               {sort === "price-asc" ? (
                  <div
                     style={{
                        fontSize: "14px",
                        color: "#fff",
                        position: "absolute",
                        top: "11px",
                        left: "14.5px",
                        cursor: "pointer",
                     }}
                  >
                     ↑
                  </div>
               ) : (
                  <div
                     style={{
                        fontSize: "14px",
                        color: "#fff",
                        position: "absolute",
                        top: "11px",
                        left: "35px",
                        cursor: "pointer",
                     }}
                  >
                     ↓
                  </div>
               )}
            </div>
            <span>Prix entre&nbsp;:</span>
            <div>
               <PriceSlider
                  setPriceMin={setPriceMin}
                  setPriceMax={setPriceMax}
               />
            </div>
            {/* <span>Résultats par&nbsp;page&nbsp;:</span> */}
            {/* <ResultsPerPage limit={limit} setLimit={setLimit} /> */}
         </div>
      </div>
   );
};

export default SearchFilters;
