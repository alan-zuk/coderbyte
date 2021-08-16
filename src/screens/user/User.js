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
import { useState } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem'
  },
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
  const location = useLocation();
  const [user] = useState(location.state.user ?? {});

  return (
    <Grid className={classes.container}>
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
