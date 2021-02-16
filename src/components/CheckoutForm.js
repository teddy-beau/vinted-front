import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutForm = ({
   userToken,
   userId,
   productTitle,
   productPrice,
   deliveryFee,
}) => {
   const stripe = useStripe();
   const elements = useElements();
   const [completed, setCompleted] = useState(false);

   const insuranceFee = 0.3;
   const total = productPrice + insuranceFee + deliveryFee;

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const cardElement = elements.getElement(CardElement);
         const stripeResponse = await stripe.createToken(cardElement, {
            name: userId,
         });
         const stripeToken = stripeResponse.token.id;
         const response = await axios.post(
            "https://vinted-clone.herokuapp.com/checkout",
            {
               stripeToken,
               productTitle,
               total,
            },
            {
               headers: {
                  Authorization: `Bearer ${userToken}`,
               },
            }
         );
         if (response.data.status === "succeeded") {
            setCompleted(true);
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <div>Résumé de la commande :</div>
         <div>
            <div>{productTitle}</div>
            <div>{productPrice.toFixed(2).replace(".", ",")}&nbsp;€</div>
         </div>
         <div>
            <div>Frais de protection des acheteurs</div>
            <div>{insuranceFee.toFixed(2).replace(".", ",")}&nbsp;€</div>
         </div>
         <div>
            <div>Frais de port</div>
            <div>{deliveryFee.toFixed(2).replace(".", ",")}&nbsp;€</div>
         </div>
         <div>
            <div>Total</div>
            <div>{total.toFixed(2).replace(".", ",")}&nbsp;€</div>
         </div>
         <p>
            Il ne vous reste plus qu'un étape pour vous offrir
            <strong> {productTitle}</strong>. Vous allez payer
            <strong> {total.toFixed(2).replace(".", ",")}&nbsp;€ </strong>(frais
            de protection et frais de port inclus).
         </p>
         {!completed ? (
            <form onSubmit={handleSubmit}>
               <CardElement />
               <button type="submit" className="green-button">
                  Confirmer le paiement
               </button>
            </form>
         ) : (
            <div
               style={{
                  color: "#26bb6a",
                  fontWeight: 500,
                  fontSize: 18,
                  alignSelf: "center",
                  paddingTop: 15,
               }}
            >
               <FontAwesomeIcon
                  icon="check-circle"
                  style={{ marginRight: 10 }}
               />
               Paiement effectué !
            </div>
         )}
      </div>
   );
};

export default CheckoutForm;
