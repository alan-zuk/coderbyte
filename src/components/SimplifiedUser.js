import { Button, Grid, makeStyles } from "@material-ui/core"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(() => ({
  userCard: {
    backgroundColor: '#028090',
    color: "white",
    height: '100%',
    '&:hover': {
      backgroundColor: 'white',
      color: '#028090',
    },
  }
}));

export const SimplifiedUser = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();

  const viewDetails = () => {
    const location = {
      pathname: '/details',
      state: { user: user }
    }
    history.push(location)
  }

  return <Grid item xs={12} md={2}>
    <Button variant="outlined" onClick={() => viewDetails()} className={classes.userCard}>{user.name}</Button>
  </Grid>
}