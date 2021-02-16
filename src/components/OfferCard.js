import { Link } from "react-router-dom";
import noAvatar from "../assets/images/no-avatar.png";

const OfferCard = ({ offer }) => {
   return (
      <>
         <Link to={`/offer/${offer._id}`}>
            <div className="offer-card">
               <div>
                  <img
                     src={
                        offer.owner.account.avatar
                           ? offer.owner.account.avatar.secure_url
                           : noAvatar
                     }
                     alt={`Avatar de ${offer.owner.account.username}`}
                  />
                  <div>{offer.owner.account.username}</div>
               </div>
               <img src={offer.product_pictures[0].secure_url} alt="Product" />
               <div>
                  <div>
                     <div>
                        {offer.product_price.toFixed(2).replace(".", ",")} €
                     </div>
                     {offer.product_details[1].TAILLE && (
                        <div>{offer.product_details[1].TAILLE}</div>
                     )}
                     {offer.product_details[0].MARQUE && (
                        <div>{offer.product_details[0].MARQUE}</div>
                     )}
                  </div>
               </div>
            </div>
         </Link>
      </>
   );
};

export default OfferCard;
