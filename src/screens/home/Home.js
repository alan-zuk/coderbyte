import { Typography, Grid } from "@material-ui/core"
import { useEffect, useState } from "react"
import { getUser } from "../../api/github";
import { SimplifiedUser } from "../../components/SimplifiedUser";

export const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
      let user1 = getUser('GrahamCampbell');
      let user2 = getUser('fabpot');
      let user3 = getUser('weierophinney');
      let user4 = getUser('rkh');
      let user5 = getUser('josh');

      let users = [];
    Promise.all([user1,user2,user3,user4,user5]).then(values => {
      values.map(value => users.push(value.data));
      setUsers(users);
    })
  },[])
  return <Grid container justifyContent="center">
    <Grid item xs={11}>
      <Typography variant="h2">
        Top 5 GitHub Users
      </Typography>
      <Typography variant="h5">
        Tap the username to see more information
      </Typography>
    </Grid>
     <Grid item xs={11}>
       <Grid container spacing={2}>
      {
        users.map((user,key) => {
          return <SimplifiedUser user={user} key={key}/>
        })
      }
      </Grid>
    </Grid>
  </Grid>
}