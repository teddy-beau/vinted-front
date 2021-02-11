import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const SignUp = ({ currentUser }) => {
   const [inputUsername, setInputUsername] = useState("");
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");
   const history = useHistory(); // To redirect upon submission
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const handleSubmit = (event) => {
      event.preventDefault();
      const fetchData = async () => {
         const response = await axios.post(
            "https://vinted-clone.herokuapp.com/user/signup",
            {
               username: inputUsername,
               email: inputEmail,
               password: inputPassword,
            }
         );
         console.log("response.data", response.data);
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
      if (!isLoading) {
         const token = data.token;
         console.log("token", token);
         currentUser(token);
         history.push("/");
      }
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
                  required
               />
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
               <div>
                  <input type="checkbox" name="tandc" id="tandc" />
                  <label htmlFor="tandc">S'inscrire à notre newsletter</label>
                  <p>
                     En m'inscrivant je confirme avoir lu et accepté les Termes
                     et Conditions et Politique de Confidentialité de Vinted. Je
                     confirme avoir au moins 18 ans.
                  </p>
               </div>

               <button className="blue-button-dark" type="submit">
                  S'inscrire
               </button>
            </form>
            <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
         </div>
      </div>
   );
};

export default SignUp;
