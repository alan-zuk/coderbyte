import { useHistory } from "react-router-dom"
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    textTransform: 'none',
  }
}));

export const BackButton = () => {
  const classes = useStyles();
  const history = useHistory();

  return <Button
    variant='outlined'
    className={classes.button}
    size="small"
    startIcon={<ArrowBack />}
    onClick={() => history.goBack()}
  >back</Button>
}