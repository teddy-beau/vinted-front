import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
   "pk_test_51ILQW3KpPuxnnREZYoR6GJaoTea9iglXnto4T19YAOuWTw029qZF0wauh2FhwOozFHiTurN33esp2tABFKciUMDs005LctYqb4"
);

const Checkout = () => {
   // To retrieve states from history (offer details)
   const location = useLocation();
   const { productPrice, productTitle } = location.state;

   return (
      <div className="offer-body">
         <div className="container">
            <section className="checkout">
               <h1>Commande et paiement</h1>
               <Elements stripe={stripePromise}>
                  <CheckoutForm
                     productPrice={productPrice}
                     productTitle={productTitle}
                  />
               </Elements>
            </section>
         </div>
      </div>
   );
};

export default Checkout;
