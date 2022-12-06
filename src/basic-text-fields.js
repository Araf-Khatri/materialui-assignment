import React  from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./styles.css";

export default function BasicTextFields() {
  const clickHandler = (e) => {
    if (e.target.closest("div").classList.contains("custom")) {
      return;
    }
    const ele = e.target.closest("div");
    const arr = Array.from(ele.classList);
    arr.splice(arr.length - 1, 1);
    ele.classList = arr.join(" ");
    ele.classList += " custom";
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{
          "& .Mui-focused fieldset": {
            borderColor: "#1d72e7 !important",
          },
          "& fieldset": {
            borderColor: "#1d72e780",
          },
        }}
        onMouseEnter={clickHandler}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}
