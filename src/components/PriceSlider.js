import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 5;
const MIN = 0;
const MAX = 100;

const PriceSlider: React.FC<{ rtl: boolean }> = ({
   rtl,
   priceMin,
   setPriceMin,
   priceMax,
   setPriceMax,
}) => {
   const [values, setValues] = React.useState([20, 50]);
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
         }}
      >
         <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            rtl={rtl}
            onChange={(values) =>
               setValues(() => {
                  setPriceMin(values[0]);
                  setPriceMax(values[1]);
               })
            }
            renderTrack={({ props, children }) => (
               <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                     ...props.style,
                     height: "40px",
                     display: "flex",
                     width: "100%",
                  }}
               >
                  <div
                     ref={props.ref}
                     style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                           values,
                           colors: ["#ccc", "#548BF4", "#ccc"],
                           min: MIN,
                           max: MAX,
                           rtl,
                        }),
                        alignSelf: "center",
                     }}
                  >
                     {children}
                  </div>
               </div>
            )}
            renderThumb={({ index, props, isDragged }) => (
               <div
                  {...props}
                  style={{
                     ...props.style,
                     height: "25px",
                     width: "25px",
                     borderRadius: "4px",
                     backgroundColor: "#FFF",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     boxShadow: "0px 2px 6px #AAA",
                  }}
               >
                  <div
                     style={{
                        position: "absolute",
                        top: "-28px",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                        padding: "4px",
                        borderRadius: "4px",
                        backgroundColor: "#548BF4",
                     }}
                  >
                     {values[index].toFixed(0)}
                  </div>
                  <div
                     style={{
                        height: "16px",
                        width: "5px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC",
                     }}
                  />
               </div>
            )}
         />
      </div>
   );
};

export default PriceSlider;
