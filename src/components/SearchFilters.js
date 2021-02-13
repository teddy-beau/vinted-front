import { useState, useEffect } from "react";
import axios from "axios";
import SortingSwitch from "./SortingSwitch";
import PriceSlider from "./PriceSlider";

const SearchFilters = ({ setData }) => {
   const [searchInput, setSearchInput] = useState("");
   const [priceMin, setPriceMin] = useState(0);
   const [priceMax, setPriceMax] = useState(500);
   const [sort, setSort] = useState("price-asc");

   // const [skip, setSkip] = useState(0);
   // const [limit, setLimit] = useState(null);

   // API REQUEST
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://vinted-clone.herokuapp.com/offers?title=${searchInput}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}`
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert("An error occured while fetching the data");
         }
      };
      fetchData();
   }, [searchInput, priceMin, priceMax, sort, setData]);

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
            <span>Trier&nbsp;par&nbsp;prix :</span>
            <div>
               <SortingSwitch sort={sort} setSort={setSort} />
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
            <span>Prix&nbsp;entre&nbsp;:</span>
            <div>
               <PriceSlider
                  setPriceMin={setPriceMin}
                  setPriceMax={setPriceMax}
               />
            </div>
         </div>
      </div>
   );
};

export default SearchFilters;
