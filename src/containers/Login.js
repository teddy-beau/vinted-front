import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ currentUser }) => {
   const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");

   const history = useHistory();

   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const handleSubmit = (event) => {
         event.preventDefault();
         const sendData = async () => {
            const response = await axios.post(
               "https://vinted-clone.herokuapp.com/user/login",
               {
                  email: inputEmail,
                  password: inputPassword,
               }
            );
            setData(response.data);
            setIsLoading(false);
         };
         sendData();
      };
      const token = data.token;
      currentUser(token);
      history.pushState("/");
   }, []);

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
