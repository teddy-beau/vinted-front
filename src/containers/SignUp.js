import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
   // States for the sign up form
   const [inputUsername, setInputUsername] = useState("");
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");
   // Function to avoid refresh on submit
   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <div className="container">
         <div className="login-section">
            <h1>S'inscrire</h1>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  value={inputUsername}
                  onChange={(event) => {
                     setInputUsername(event.target.value);
                  }}
               />
               <input
                  type="email"
                  placeholder="Adresse email"
                  value={inputEmail}
                  onChange={(event) => {
                     setInputEmail(event.target.value);
                  }}
               />
               <input
                  type="password"
                  placeholder="Mot de passe"
                  value={inputPassword}
                  onChange={(event) => {
                     setInputPassword(event.target.value);
                  }}
               />
               <div>
                  <input type="checkbox" name="tandc" id="tandc" />
                  <label htmlFor="tandc">S'inscrire à notre newsletter</label>
                  <p>
                     En m'inscrivant je confirme avoir lu et accepté les Termes
                     et Conditions et Politique de Confidentialité de Vinted. Je
                     confirme avoir au moins 18 ans.
                  </p>
               </div>

               <button type="submit">S'inscrire</button>
            </form>
            <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
         </div>
      </div>
   );
};

export default SignUp;
