import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Grid
      container
      sx={{
        minHeight: "80px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5">Codebase Heatmap</Typography>
      </Grid>

      <Divider
        sx={{
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          width: "100%",
          marginTop: "5px",
        }}
      />
    </Grid>
  );
}
