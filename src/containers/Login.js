import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ currentUser }) => {
   //Form input
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");
   // Pour quoi faire ?
   const history = useHistory();
   // Data received from server
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
         console.log("response.data", response.data);
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
      if (!isLoading) {
         console.log("data.token", data.token);
         const token = data.token;
         console.log("token", token);
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
               />
               <input
                  type="password"
                  placeholder="Mot de passe"
                  value={inputPassword}
                  onChange={(event) => {
                     setInputPassword(event.target.value);
                  }}
               />
               <button type="submit">Se connecter</button>
            </form>
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
         </div>
      </div>
   );
};

export default Login;
