import express, { json } from "express";
import client from "smartsheet";
import fetch from "node-fetch";

const router = express.Router();
const smartsheet = client.createClient({
  accessToken: "vGgxZCzwVm2G004S4MkPaL4wMCSN1v6qLHHXA",
  logLevel: "info",
});
// list all users
router.get("/", (req, res) => {
//list users from smartsheet
smartsheet.users.listAllUsers()
.then(function(userList) {
  res.send(JSON.stringify(userList));
})
.catch(function(error) {
  console.log(error);
});

});

router.post('/login', (req, res) => {
  const url ="https://app.smartsheet.com/b/authorize"
  //authenticate the user
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => {
           console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })


  
  
});

export default router;
