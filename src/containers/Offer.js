import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
   const { _id } = useParams();

   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://vinted-clone.herokuapp.com/offer/${_id}`
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert("An error occured while fetching the data");
         }
      };
      fetchData();
   }, [_id]);

   return isLoading ? (
      <div>Loading...</div>
   ) : (
      <div className="container">
         <div>
            Offer <Link to="/">Go to home</Link>
         </div>
         <div>
            <div>{data.product_name}</div>
            <div></div>
         </div>
      </div>
   );
};

export default Offer;
