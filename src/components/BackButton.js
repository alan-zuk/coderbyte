import { Button, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"


export const BackButton = () => {

  const history = useHistory();

  return   <Button onClick={() => history.goBack()} style={{color:'white'}}>back</Button>
    
}