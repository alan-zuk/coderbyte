import { useEffect, useState } from "react";
import { AppBar as Bar, Grid, Toolbar, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { BackButton } from "./BackButton";

export const AppBar = () => {

  const [title, setTitle] = useState("Home")
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/details") {
      setTitle("User")
    }
    else {
      setTitle("Home")
    }
  }, [location.pathname])

  return <Bar position="static" style={{ backgroundColor: "#00171f" }}>
    <Toolbar>
      {location.pathname !== "/" && <BackButton />}
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h6">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </Bar>
}