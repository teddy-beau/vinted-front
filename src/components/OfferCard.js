import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
   return (
      <>
         <Link to={`/offer/${offer._id}`}>
            <div className="offer-card" key={offer._id}>
               <div>
                  <img
                     src={offer.owner.account.avatar.secure_url}
                     alt={`Avatar de ${offer.owner.account.username}`}
                  />
                  <div>{offer.owner.account.username}</div>
               </div>
               {/* Problème avec l'enregistrement des images en tableau */}
               {/* <img src={offer.product_pictures[0].secure_url} alt="Product" /> */}
               <img
                  src={
                     offer.product_pictures[0].public_name === "picture1"
                        ? offer.product_pictures[0].secure_url
                        : offer.product_pictures[1].secure_url
                  }
                  alt="Product"
               />

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
                     )}{" "}
                  </div>
                  {/* <div>
                     <div><3 1</div>
                     <div>Boosted</div>
                  </div> */}
               </div>
            </div>
         </Link>
      </>
   );
};

export default OfferCard;
