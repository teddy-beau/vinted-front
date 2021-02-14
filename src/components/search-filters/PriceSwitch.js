import { Switch, withStyles } from "@material-ui/core";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriceSwitch = ({ sort, setSort }) => {
   const [checked, setChecked] = useState(false);

   const toggleSort = (event) => {
      setChecked((checked) => !checked);
      if (checked) {
         setSort("price-asc");
      } else {
         setSort("price-desc");
      }
   };

   const PriceSwitch = withStyles({
      switchBase: {
         color: "#21adb6",
         "&$checked": {
            color: "#21adb6",
         },
         "&$checked + $track": {
            backgroundColor: "#10979e",
         },
      },
      checked: {},
      track: { backgroundColor: "#10979e" },
   })(Switch);

   return (
      <>
         <span>Trier&nbsp;par prix&nbsp;:</span>
         <div>
            <FontAwesomeIcon icon="caret-up" />
            <PriceSwitch checked={checked} onChange={toggleSort}></PriceSwitch>
            <FontAwesomeIcon icon="caret-down" />
         </div>
      </>
   );
};

export default PriceSwitch;
