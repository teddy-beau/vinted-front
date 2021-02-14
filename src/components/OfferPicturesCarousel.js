import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OfferPicturesCarousel = ({ data }) => {
   const responsive = {
      allScreens: {
         breakpoint: { max: 4000, min: 0 },
         items: 1,
      },
   };

   return (
      <Carousel
         swipeable={true}
         // draggable={true}
         showDots={true}
         responsive={responsive}
         ssr={true}
         infinite={true}
         // autoPlay={true}
         // autoPlaySpeed={3000}
         keyBoardControl={true}
         transitionDuration={500}
      >
         {data.product_pictures.map((picture) => {
            return (
               <img
                  src={picture.secure_url}
                  alt={`Offer ${picture.public_name}`}
                  key={picture.public_id}
               />
            );
         })}
      </Carousel>
   );
};

export default OfferPicturesCarousel;
