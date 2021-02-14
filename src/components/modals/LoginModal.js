import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = ({ hideLoginModal, setHideLoginModal, currentUser }) => {
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");
   const history = useHistory(); // To redirect upon submission

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
         // console.log("response: ", response);
         currentUser(response.data.token);
         history.push("/");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div
         className="modal-container"
         style={hideLoginModal ? { display: "none" } : { display: "block" }}
      >
         <div className="login-section">
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
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
         </div>
      </div>
   );
};

export default LoginModal;