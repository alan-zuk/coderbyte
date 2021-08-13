import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
    display: "block",
  },
  description: {
    display: "inline",
    color: "gray",
  },
}));

export const User = () => {
  const classes = useStyles();
  const [user,setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    setUser(location.state.user);
  },[])

  return (
    <Grid>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="UserAvatar" src={user.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="h5"
              className={classes.title}
              color="textPrimary"
            >
              {user.name}
            </Typography>
          }
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.description}
              color="textPrimary"
            >
              {user.location}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
    </Grid>
  );
};
