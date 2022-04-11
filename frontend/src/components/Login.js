import {Avatar, Grid, Paper, Typography, TextField, Link, Button} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Login(){
    const stylePaper={padding: 20, margin: "40px auto", width: "350px"}
    const avatarStyle={background: "blue"}
    const styleForm={padding:10,}
    const btnStyle={padding: 10}
    const styleTypo={padding:20}
    return(
        <Grid>
            <Paper elevation={10} style={stylePaper}>
                <Grid align="center" justifyContent="flex">
                    <Avatar style={avatarStyle}>P</Avatar>
                    <h2>SIGN IN</h2>
                </Grid>
                <TextField id="outlined-basic" label="Username" variant="outlined" style={styleForm} fullWidth required/>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={styleForm} fullWidth required/>
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" style={styleForm} fullWidth required/>
                <FormControlLabel
        control={
          <Checkbox name="checkedB" color="primary" />
        }
        label="Remember Me"
      />
      <Button variant="contained" color="primary" style={btnStyle} fullWidth>SIGN IN</Button>
      <Typography align="center" style={styleTypo}>
          <Link href="#">Forgot Password</Link>
        </Typography>
        </Paper>
    </Grid>
    )
}
export default Login