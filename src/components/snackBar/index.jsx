import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar(props) {
  const { handleClose, open, vertical, horizontal, message } = props;

  return (
    <Box sx={{ width: 500 , backgroundColor:"red"}}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </Box>
  );
}
