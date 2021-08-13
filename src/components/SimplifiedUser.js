import { Button, Grid, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"

export const SimplifiedUser = ({user}) => {
  const history = useHistory();

  const viewDetails = () => {
    const location = {
      pathname: '/details',
      state: { user: user }
    }
    history.push(location)
  }
  
  return <Grid item xs={2}>
   <Button variant="outlined" onClick={() => viewDetails()} style={{backgroundColor: '#028090', color:"white"}}>{user.name}</Button>
  </Grid>
}