import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import logo from "../assets/images/vinted-logo.png";
import LoginModal from "./modals/LoginModal";
import SignUpModal from "./modals/SignUpModal";

const Header = ({ currentUser, userToken, setData, limit, page }) => {
   const history = useHistory(); // Handle redirect upon click
   const location = useLocation();

   const [hideLoginModal, setHideLoginModal] = useState(true);
   const [hideSignUpModal, setHideSignUpModal] = useState(true);

   return (
      <>
         <div className="container">
            <header>
               <Link to="/">
                  <img src={logo} alt="Logo Vinted" />
               </Link>
               <SearchFilters setData={setData} limit={limit} page={page} />
               {!userToken && location.pathname !== "/signup" && (
                  <div
                     className="white-button"
                     onClick={() => {
                        setHideSignUpModal(false);
                     }}
                  >
                     S'inscrire
                  </div>
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
                  location.pathname !== "/login" && (
                     <div
                        className="white-button"
                        onClick={() => {
                           setHideLoginModal(false);
                        }}
                     >
                        Se connecter
                     </div>
                  )
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
            hideLoginModal={hideLoginModal}
            currentUser={currentUser}
            setHideLoginModal={setHideLoginModal}
         />
         <SignUpModal
            hideSignUpModal={hideSignUpModal}
            currentUser={currentUser}
            setHideSignUpModal={setHideSignUpModal}
         />
      </>
   );
};

export default Header;
