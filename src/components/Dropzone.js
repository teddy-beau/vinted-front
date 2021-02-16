import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropzone = ({ setOfferPictures }) => {
   const thumbsContainer = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
   };
   const thumb = {
      display: "inline-flex",
      borderRadius: 2,
      border: "1px solid #eaeaea",
      margin: 8,
      width: 200,
      height: 200,
      padding: 4,
      boxSizing: "border-box",
   };
   const thumbInner = {
      display: "flex",
      minWidth: 0,
      overflow: "hidden",
   };
   const img = {
      display: "block",
      width: "auto",
      height: "100%",
   };

   const [files, setFiles] = useState([]);

   const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
         setFiles(
            acceptedFiles.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         );
         console.log("acceptedFiles", acceptedFiles);
         // Set-up for single file upload (index 0)
         setOfferPictures(acceptedFiles[0]);
      },
   });

   // File preview
   const thumbs = files.map((file) => (
      <div style={thumb} key={file.name}>
         <div style={thumbInner}>
            <img src={file.preview} style={img} alt={file.name} />
         </div>
         <div // Icon to remove a selected file on click
            onClick={() => {
               const newArr = [...files];
               newArr.splice(file, 1); // Needs to be fixed (removing index of array instead of specific file)
               setFiles(newArr);
            }}
         >
            <FontAwesomeIcon
               icon="times-circle"
               style={{
                  marginLeft: "5px",
                  cursor: "pointer",
                  color: "grey",
               }}
            />
         </div>
      </div>
   ));

   useEffect(
      () => () => {
         // Make sure to revoke the data uris to avoid memory leaks
         files.forEach((file) => URL.revokeObjectURL(file.preview));
      },
      [files]
   );

   return (
      <section>
         <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} required />
            <p>
               Glisse les photos de ton article ici ou clique ci-dessous pour
               sélectionner tes fichiers.
            </p>
            <div
               className="white-button"
               style={{ width: "200px", margin: "30px auto 0 auto" }}
            >
               <FontAwesomeIcon
                  icon="plus-circle"
                  style={{ marginRight: "10px" }}
               />
               Ajouter des photos
            </div>
         </div>
         <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
   );
};

export default Dropzone;
