import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = ({ hideLoginModal, setHideLoginModal, currentUser }) => {
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const response = await axios.post(
            "https://vinted-clone.herokuapp.com/user/login",
            {
               email: inputEmail,
               password: inputPassword,
            }
         );
         currentUser(response.data.token);
         setHideLoginModal(true);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div
         className="modal-container"
         style={{ display: hideLoginModal ? "none" : "block" }}
      >
         <section className="login-signup-section">
            <div
               onClick={() => {
                  setHideLoginModal(true);
               }}
            >
               <FontAwesomeIcon icon="times-circle" />
            </div>
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit}>
               <input
                  type="email"
                  placeholder="Adresse email"
                  value={inputEmail}
                  onChange={(event) => {
                     setInputEmail(event.target.value);
                  }}
                  required
               />
               <input
                  type="password"
                  placeholder="Mot de passe"
                  value={inputPassword}
                  onChange={(event) => {
                     setInputPassword(event.target.value);
                  }}
                  required
               />
               <button
                  className="blue-button-dark"
                  type="submit"
                  onClick={() => setHideLoginModal(true)}
               >
                  Se connecter
               </button>
            </form>
            <Link to="/signup" onClick={() => setHideLoginModal(true)}>
               Pas encore de compte ? Inscris-toi !
            </Link>
         </section>
      </div>
   );
};

export default LoginModal;
