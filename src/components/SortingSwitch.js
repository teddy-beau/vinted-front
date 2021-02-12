import { Switch, withStyles } from "@material-ui/core";
import { useState } from "react";

const SortingSwitch = ({ sort, setSort }) => {
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

   return <PriceSwitch checked={checked} onChange={toggleSort}></PriceSwitch>;
};

export default SortingSwitch;
