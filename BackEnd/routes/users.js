import express, { json } from "express";
import qs from "querystring";
import client from "smartsheet";
import fetch from "node-fetch";
const app = express();
const router = express.Router();
// instantiating the Smartsheet client
const smartsheet = client.createClient({
  accessToken: "vGgxZCzwVm2G004S4MkPaL4wMCSN1v6qLHHXA",
  logLevel: "info",
});

router.get('/login', (req, res) => {
  res.send('<a href="/auth">Login to Smartsheet</a></br>')
});

router.get('/auth', (req, res) => {
  console.log('Your authorization url: ', authorizationUri);
  res.redirect(authorizationUri);
});
// helper function to assemble authorization url
function authorizeURL(params) {
  console.log(params);
  const authURL = 'https://app.smartsheet.com/b/authorize';
 
  return `${authURL}?${qs.stringify(params)}`;
}
const authorizationUri = authorizeURL({
  response_type: 'code',
  client_id:"3ouubwjr4p3b2ytzrpg",
  scope: '',
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
