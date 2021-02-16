import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceSlider = ({ setPriceMax, setPriceMin }) => {
   const [values, setValues] = useState([0, 500]);
   return (
      <>
         <span>Prix entre&nbsp;:</span>
         <div>
            <Range
               step={5}
               min={0}
               max={500}
               values={values}
               onChange={(values) => {
                  setValues(values);
                  setPriceMax(values[1]);
                  setPriceMin(values[0]);
               }}
               renderTrack={({ props, children }) => {
                  return (
                     <div
                        style={{
                           ...props.style,
                           height: "6px",
                           borderRadius: "2px",
                           width: "100%",
                           backgroundColor: "#EEE",
                        }}
                     >
                        <div
                           ref={props.ref}
                           style={{
                              height: "5px",
                              width: "100%",
                              borderRadius: "4px",
                              background: getTrackBackground({
                                 values: values,
                                 colors: ["#eee", "#1fa1aa", "#eee"],
                                 min: 0,
                                 max: 500,
                                 // rtl,
                              }),
                              alignSelf: "center",
                           }}
                        >
                           {children}
                        </div>
                     </div>
                  );
               }}
               renderThumb={({ index, props }) => {
                  return (
                     <div
                        {...props}
                        style={{
                           ...props.style,
                           height: "15px",
                           width: "15px",
                           borderRadius: "50%",
                           backgroundColor: "#21adb6",
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           border: "1px solid #FFF",
                        }}
                     >
                        <div
                           style={{
                              position: "absolute",
                              top: "-25px",
                              color: "#fff",
                              fontWeight: "300",
                              fontSize: "12px",
                              fontFamily:
                                 "Arial,Helvetica Neue,Helvetica,sans-serif",
                              padding: "4px",
                              borderRadius: "4px",
                              backgroundColor: "#21adb6",
                           }}
                        >
                           {values[index]}&nbsp;€
                        </div>
                     </div>
                  );
               }}
            />
         </div>
      </>
   );
};

export default PriceSlider;
