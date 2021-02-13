import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import logo from "../assets/images/vinted-logo.png";
import LoginModal from "./modals/LoginModal";
import SignUpModal from "./modals/SignUpModal";

const Header = ({ currentUser, userToken, setData, limit, page }) => {
   const history = useHistory(); // Handle redirect upon click

   const [hideModal, setHideModal] = useState(true);

   return (
      <>
         <div className="container">
            <header>
               <Link to="/">
                  <img src={logo} alt="Logo Vinted" />
               </Link>
               <SearchFilters setData={setData} limit={limit} page={page} />
               {!userToken && (
                  <Link className="white-button" to="/signup">
                     S'inscrire
                  </Link>
               )}
               {userToken ? (
                  <div
                     className="red-button"
                     onClick={() => {
                        currentUser(null);
                        history.push("/");
                     }}
                  >
                     Se deconnecter
                  </div>
               ) : (
                  <Link
                     className="white-button"
                     // to="/login"
                     onClick={() => {
                        setHideModal(false);
                     }}
                  >
                     Se connecter
                  </Link>
               )}
               <Link
                  className="blue-button"
                  to={userToken ? "/offer/publish" : "/login"}
               >
                  Vends tes articles
               </Link>
            </header>
         </div>
         <LoginModal
            hideModal={hideModal}
            currentUser={currentUser}
            setHideModal={setHideModal}
         />
         <SignUpModal
            hideModal={hideModal}
            currentUser={currentUser}
            setHideModal={setHideModal}
         />
      </>
   );
};

export default Header;
