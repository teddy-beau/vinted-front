import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ productTitle, productPrice }) => {
   const stripe = useStripe();
   const elements = useElements();

   const [completed, setCompleted] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const cardElement = elements.getElement(CardElement);
         const stripeResponse = await stripe.createToken(cardElement, {
            name: "coucou",
         });
         console.log("stripeResponse", stripeResponse);
         const stripeToken = stripeResponse.token.id;
         const response = await axios.post("http://localhost:3100/checkout", {
            stripeToken,
            productTitle,
            productPrice,
         });
         console.log("response.data", response.data);
         if (response.data.status === "succeeded") {
            setCompleted(true);
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <div>Résumé de la commande</div>
         <div>
            <div>{productTitle}</div>
            <div>{productPrice} €</div>
         </div>
         <div>
            <div>Frais protection acheteurs</div>
            <div>0.30 €</div>
         </div>
         <div>
            <div>Frais de port</div>
            <div>2.50 €</div>
         </div>
         <div>
            <div>Total</div>
            <div> €</div>
         </div>
         <p>
            Il ne vous reste plus qu'un étape pour vous offrir Article. Vous
            allez payer XX € (frais de protection et frais de port inclus).
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
