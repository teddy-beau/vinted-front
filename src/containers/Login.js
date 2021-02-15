import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ currentUser }) => {
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
      <div className="container">
         <section className="login-signup-section">
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
               <button className="blue-button-dark" type="submit">
                  Se connecter
               </button>
            </form>
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
         </section>
      </div>
   );
};

export default Login;
