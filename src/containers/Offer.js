import { useParams } from "react-router-dom";
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
      <div className="offer-body">
         <div className="container offer-details">
            <div>
               <img src={data.product_pictures[0].secure_url} alt="Product" />
            </div>
            <div>
               <div>{data.product_price.toFixed(2).replace(".", ",")} €</div>
               <ul>
                  {data.product_details.map((elem, index) => {
                     return (
                        <li>
                           <span>{Object.keys(elem)}</span>
                           <span>{elem[Object.keys(elem)]}</span>
                        </li>
                     );
                  })}
               </ul>
               <h1>{data.product_name}</h1>
               <div>{data.product_description}</div>
               <div>
                  <img
                     src={data.owner.account.avatar.secure_url}
                     alt={`Avatar de ${data.owner.account.username}`}
                  />
                  <div>{data.owner.account.username}</div>
               </div>
               <button className="blue-button-dark">Acheter</button>
            </div>
         </div>
      </div>
   );
};

export default Offer;
