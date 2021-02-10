import { Link, useParams } from "react-router-dom";

const Offer = ({ offers }) => {
   const { _id } = useParams();

   const offerToFind = offers.find((offer) => offer._id === _id);
   console.log(offerToFind);

   return (
      <div className="container">
         <div>
            Offer <Link to="/">Go to home</Link>
         </div>
         <p>Offer ID is {_id}</p>
         <div>
            <div>{offerToFind.product_name}</div>
            <div></div>
         </div>
      </div>
   );
};

export default Offer;
