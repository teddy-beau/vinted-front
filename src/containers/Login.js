import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ currentUser }) => {
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");
   const history = useHistory(); // To redirect upon submission
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const handleSubmit = (event) => {
      event.preventDefault();
      const fetchData = async () => {
         const response = await axios.post(
            "https://vinted-clone.herokuapp.com/user/login",
            {
               email: inputEmail,
               password: inputPassword,
            }
         );
         // console.log("response.data", response.data);
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
      if (!isLoading) {
         const token = data.token;
         // console.log("token", token);
         currentUser(token);
         history.push("/");
      }
   };

   return (
      <div className="container">
         <div className="login-section">
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
         </div>
      </div>
   );
};

export default Login;
