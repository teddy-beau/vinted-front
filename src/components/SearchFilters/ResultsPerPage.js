// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ResultsPerPage = ({ limit, setLimit }) => {
   const useStyles = makeStyles(() => ({
      formControl: {
         // margin: theme.spacing(1),
         minWidth: 130,
      },
      input: {
         color: "red",
      },
      // selectEmpty: {
      //    marginTop: theme.spacing(2),
      // },
   }));

   const classes = useStyles();
   // const [value, setValue] = useState();

   const handleChange = (event) => {
      setLimit(event.target.value);
      // setLimit(value);
   };

   return (
      <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">Résultats</InputLabel>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={limit}
            onChange={handleChange}
            style={{ fontSize: "12px" }}
         >
            <MenuItem value={10} style={{ fontSize: "14px" }}>
               10
            </MenuItem>
            <MenuItem value={25} style={{ fontSize: "14px" }}>
               25
            </MenuItem>
            <MenuItem value={50} style={{ fontSize: "14px" }}>
               50
            </MenuItem>
         </Select>
      </FormControl>
   );
};

export default ResultsPerPage;
