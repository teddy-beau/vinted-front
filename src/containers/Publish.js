import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
   const [offerPictures, setOfferPictures] = useState();

   const [data, setData] = useState([]); // From API request
   // const [isLoading, setIsLoading] = useState(true);

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
         console.log("response: ", response.data);
         setData(response.data);
         // currentUser(response.data.token);
         // setIsLoading(false);
         history.push(`/offer/${data._id}`);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="container">
         <section className="publish-section">
            <h1>Publier une offre</h1>
            <form onSubmit={handleSubmit}>
               <label htmlFor="title">Titre de l'annonce</label>
               <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Robe rouge..."
                  value={offerTitle}
                  onChange={(event) => setOfferTitle(event.target.value)}
               />
               <label htmlFor="description">Description de l'annonce</label>
               <textarea
                  name="description"
                  id="description"
                  cols="50"
                  rows="10"
                  placeholder="Aucun défaut sur cette robe très peu portée..."
                  value={offerDescription}
                  onChange={(event) => setOfferDescription(event.target.value)}
               />
               <label htmlFor="price">Prix de l'article</label>
               <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="30"
                  value={offerPrice}
                  onChange={(event) => setOfferPrice(event.target.value)}
               />
               <label htmlFor="brand">Marque</label>
               <input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Zara..."
                  value={offerBrand}
                  onChange={(event) => setOfferBrand(event.target.value)}
               />
               <label htmlFor="size">Taille</label>
               <input
                  type="text"
                  name="size"
                  id="size"
                  placeholder="M..."
                  value={offerSize}
                  onChange={(event) => setOfferSize(event.target.value)}
               />
               <label htmlFor="condition">État</label>
               <input
                  type="text"
                  name="condition"
                  id="condition"
                  placeholder="Très bon état..."
                  value={offerCondition}
                  onChange={(event) => setOfferCondition(event.target.value)}
               />
               <label htmlFor="color">Couleur</label>
               <input
                  type="text"
                  name="color"
                  id="color"
                  placeholder="Rouge..."
                  value={offerColor}
                  onChange={(event) => setOfferColor(event.target.value)}
               />
               <label htmlFor="city">Emplacement</label>
               <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Paris..."
                  value={offerCity}
                  onChange={(event) => setOfferCity(event.target.value)}
               />
               <label htmlFor="pictures">Photos</label>
               <input
                  type="file"
                  multiple={true}
                  name="pictures"
                  id="pictures"
                  onChange={(event) => {
                     // setOfferPictures(event.target.files);
                     setOfferPictures(event.target.files[0]);
                  }}
               />
               <button type="submit">Publier l'offre</button>
            </form>
            {/* {!isLoading && (
               <div>
                  <span>{data.title}</span> */}
            {/* {data.product_pictures.map((pic) => {
                     return (
                        <img
                           key={data.product_pictures[pic].public_id}
                           src={data.product_pictures[pic].secure_url}
                           alt={data.title}
                           style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                           }}
                        />
                     );
                  })} */}
            {/* <img
                     src={data.product_pictures[0].secure_url}
                     alt={data.title}
                     style={{
                        height: "200px",
                        width: "200px",
                        objectFit: "cover",
                     }}
                  />
               </div>
            )} */}
         </section>
      </div>
   );
};

export default Publish;
