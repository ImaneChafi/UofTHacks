import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import { FormControl, InputLabel, makeStyles } from '@material-ui/core'
import { login } from '../../Actions/login'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
            <div>{children}</div>
            )}
          </div>
        );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    loginCard: {
        margin: "10px",
        width: "20%",
        minWidth: "350px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
  }));

function handleLogin(email, password, setUser, setLogin) {
    login(email, password, setUser, setLogin);
}

function Login(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerPronoun, setRegisterPronoun] = useState("");
    const [registerSchool, setRegisterSchool] = useState("");

    return (
        <div className="Wrapper">
            <Card className={classes.loginCard}>
                <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} aria-label="simple tabs example" centered>
                        <Tab label="Log In" />
                        <Tab label="Register" />
                    </Tabs>
                <TabPanel value={value} index={0}>
                    <form>
                        <CardContent className="loginField">
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="email"
                                label="Email"
                                type="email"
                                name="current-email"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="standard-password-input"
                                name="current-password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                // onKeyPress={() => handleLogin(email, password, props.setUser, props.setLogin)}
                            />
                            <Typography variant="body2" component="p">
                                {/* {this.state.signin_error} */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className="Signin" size="small" color="primary" onClick={() => handleLogin(email, password, props.setUser, props.setLogin)}>
                                Sign In
                            </Button>
                        </CardActions>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <form>
                        <CardContent className="loginField">
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="name"
                                label="First Name"
                                type="name"
                                name="signup-nameFirst"
                                fullWidth
                                onChange={(e) => setRegisterName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="name"
                                label="Last Name"
                                type="name"
                                name="signup-nameLast"
                                fullWidth
                                onChange={(e) => setRegisterLastName(e.target.value)}
                            />
                            <FormControl className={classes.formControl} style={{float: "left"}}>
                            <InputLabel>Pronouns</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Pronouns"
                                value={registerPronoun}
                                onChange={(e) => setRegisterPronoun(e.target.value)}
                            >
                                <MenuItem value={"He/Him"}>He/Him</MenuItem>
                                <MenuItem value={"She/Her"}>She/Her</MenuItem>
                                <MenuItem value={"They/Them"}>They/Them</MenuItem>
                            </Select>
                            </FormControl>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="Email"
                                label="Email"
                                type="email"
                                name="signup-email"
                                fullWidth
                                onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="standard-password-input"
                                name="signup-password"
                                label="Password"
                                type="password"
                                fullWidth
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="dense"
                                id="standard-password-input"
                                name="signup-password-confirm"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                                // onKeyPress={this.handleEnterSignup}
                            />
                            <p>
                                {/* {this.state.signup_error ? this.state.signup_error : this.state.signup_success} */}
                            </p>
                        </CardContent>
                        <CardActions className="card-action right-align">
                            <Button className="Signin" size="medium" color="primary" align="right">
                                Sign Up
                            </Button>
                        </CardActions>
                    </form>
                </TabPanel>
                </Card>
        </div>
    )
}

export default Login;