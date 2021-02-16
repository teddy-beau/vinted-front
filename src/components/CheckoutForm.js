import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

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

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const cardElement = elements.getElement(CardElement);
         const stripeResponse = await stripe.createToken(cardElement, {
            name: userId,
         });
         console.log("stripeResponse", stripeResponse);
         const stripeToken = stripeResponse.token.id;
         const response = await axios.post(
            "http://localhost:3100/checkout",
            {
               stripeToken,
               productTitle,
               productPrice,
            },
            {
               headers: {
                  Authorization: `Bearer ${userToken}`,
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         console.log("response.data", response.data);
         if (response.data.status === "succeeded") {
            setCompleted(true);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const insuranceFee = 0.3;
   const total = productPrice + insuranceFee + deliveryFee;

   return (
      <div>
         <div>Résumé de la commande</div>
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
               <button type="submit" className="blue-button-dark">
                  Confirmer le paiement
               </button>
            </form>
         ) : (
            <div>Paiement effectué !</div>
         )}
      </div>
   );
};

export default CheckoutForm;
