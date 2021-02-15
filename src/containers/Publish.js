import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Dropzone from "../components/Dropzone";

const Publish = ({ userToken }) => {
   const history = useHistory(); // To redirect upon submission

   const [offerTitle, setOfferTitle] = useState("");
   const [offerDescription, setOfferDescription] = useState("");
   const [offerPrice, setOfferPrice] = useState();
   const [offerBrand, setOfferBrand] = useState("");
   const [offerSize, setOfferSize] = useState("");
   const [offerCondition, setOfferCondition] = useState("");
   const [offerColor, setOfferColor] = useState("");
   const [offerCity, setOfferCity] = useState("");
   const [offerPictures, setOfferPictures] = useState(0);

   const handleSubmit = async (event) => {
      event.preventDefault();

      // const fileKeys = Object.keys(offerPictures);
      // console.log("fileKeys", fileKeys);

      // const newOfferPictures = [];
      // fileKeys.forEach((fileKey) => {
      //    console.log("fileKey", fileKey);
      //    newOfferPictures.push(offerPictures[fileKey]);
      // });
      // console.log("newOfferPictures", newOfferPictures);
      // setOfferPictures(newOfferPictures);
      // console.log("finalArr", offerPictures);

      // Need a FormData type object to send files to server
      const formData = new FormData();
      formData.append("title", offerTitle);
      formData.append("description", offerDescription);
      formData.append("price", offerPrice);
      formData.append("brand", offerBrand);
      formData.append("size", offerSize);
      formData.append("condition", offerCondition);
      formData.append("color", offerColor);
      formData.append("city", offerCity);
      formData.append("pictures", offerPictures);

      try {
         const response = await axios.post(
            "https://vinted-clone.herokuapp.com/offer/publish",
            formData,
            {
               headers: {
                  Authorization: `Bearer ${userToken}`,
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         // console.log("response: ", response.data);
         // console.log("offerPictures", offerPictures);
         history.push(`/offer/${response.data._id}`);
      } catch (error) {
         console.log(error);
      }
   };
   console.log("offerPictures", offerPictures);

   return (
      <div className="offer-body">
         <div className="container">
            <section className="publish-section">
               <h1>Vends ton article</h1>
               <form onSubmit={handleSubmit}>
                  <div>
                     <div>
                        <Dropzone
                           offerPictures={offerPictures}
                           setOfferPictures={setOfferPictures}
                        />
                        {/* <label htmlFor="pictures">Photos</label> */}
                        {/* <input
                           type="file"
                           required
                           multiple={true}
                           name="pictures"
                           id="pictures"
                           onChange={(event) => {
                              // setOfferPictures(event.target.files);
                              setOfferPictures(event.target.files[0]);
                           }}
                        /> */}
                     </div>
                  </div>
                  <div>
                     <div>
                        <label htmlFor="title">Titre de l'annonce</label>
                        <input
                           type="text"
                           name="title"
                           required
                           id="title"
                           placeholder="ex : Robe rouge"
                           value={offerTitle}
                           onChange={(event) =>
                              setOfferTitle(event.target.value)
                           }
                        />
                     </div>
                     <div>
                        <label htmlFor="description">
                           Description de l'annonce
                        </label>
                        <textarea
                           required
                           name="description"
                           id="description"
                           cols="70"
                           rows="6"
                           placeholder="ex : Aucun défaut sur cette robe très peu portée..."
                           value={offerDescription}
                           onChange={(event) =>
                              setOfferDescription(event.target.value)
                           }
                        />
                     </div>
                  </div>
                  <div>
                     <div>
                        <label htmlFor="brand">Marque</label>
                        <input
                           type="text"
                           name="brand"
                           id="brand"
                           placeholder="ex : Zara"
                           value={offerBrand}
                           onChange={(event) =>
                              setOfferBrand(event.target.value)
                           }
                        />
                     </div>
                     <div>
                        <label htmlFor="size">Taille</label>
                        <input
                           type="text"
                           name="size"
                           id="size"
                           placeholder="ex : L / 40 / 12"
                           value={offerSize}
                           onChange={(event) =>
                              setOfferSize(event.target.value)
                           }
                        />
                     </div>
                     <div>
                        <label htmlFor="condition">État</label>
                        <input
                           type="text"
                           name="condition"
                           id="condition"
                           placeholder="ex : Très bon état"
                           value={offerCondition}
                           onChange={(event) =>
                              setOfferCondition(event.target.value)
                           }
                        />
                     </div>
                     <div>
                        <label htmlFor="color">Couleur</label>
                        <input
                           type="text"
                           name="color"
                           id="color"
                           placeholder="ex : Rouge..."
                           value={offerColor}
                           onChange={(event) =>
                              setOfferColor(event.target.value)
                           }
                        />
                     </div>
                     <div>
                        <label htmlFor="city">Emplacement</label>
                        <input
                           type="text"
                           name="city"
                           id="city"
                           placeholder="ex : Paris"
                           value={offerCity}
                           onChange={(event) =>
                              setOfferCity(event.target.value)
                           }
                        />
                     </div>
                  </div>
                  <div>
                     <div>
                        <label htmlFor="price">Prix de l'article</label>
                        <input
                           type="number"
                           required
                           name="price"
                           id="price"
                           placeholder="0,00 €"
                           value={offerPrice}
                           onChange={(event) =>
                              setOfferPrice(event.target.value)
                           }
                        />
                     </div>
                  </div>

                  <button type="submit" className="blue-button-dark">
                     Publier l'offre
                  </button>
               </form>
            </section>
         </div>
      </div>
   );
};

export default Publish;
