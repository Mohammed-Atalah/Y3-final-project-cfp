import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebaseconfig";

const theme = createTheme();

export default function SignIn({ setSignIn, SignedIn }) {
  const navigate = useNavigate();
  // https://www.youtube.com/watch?v=9bXhf_TELP4
  // State on whether this page is "Log In" versus "Sign Up"
  const [isSignInState, setIsSignInState] = useState(true);
  const addUser = async (name) => {
    try {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: name,
        favorites: { scholarships: {}, universities: {}, tests: {}, stem: {} },
      });
    } catch (error) {
      alert(error);
    }
  };
  const registerUser = async (name, email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.uid);
      addUser(name);
      setSignIn(true);
      // console.log(user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setSignIn(true);
      navigate("/");
      // e.push("/");
      // useMatch("/");
      console.log(SignedIn);
      // You can access the current user
      // console.log(auth.currentUser.email);
    } catch (error) {
      alert(error.message);
    }
  };

  const logoutUser = async () => {
    await signOut(auth);
    setSignIn(false);
    // console.log(auth.currentUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Handle Sign-In versus Login
    let email = data.get("email");
    let password = data.get("password");
    let name = data.get("name");
    // console.log({
    //   email: email,
    //   password: password,
    // });
    if (isSignInState) {
      console.log("Trying to log in...");
      // console.log(data.get("email"));
      loginUser(email, password);
    } else {
      console.log("Trying to sign up...");
      // console.log(data.get("email"));
      registerUser(name, email, password);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isSignInState ? "Log In" : "Sign Up"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {!isSignInState && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                // to="/"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {/* <Link to="/"> */}
                {isSignInState ? "Log In" : "Sign Up"}
                {/* </Link> */}
              </Button>
              <Grid container>
                <Grid
                  item
                  onClick={() => setIsSignInState(!isSignInState)}
                  color={{ color: "blue", "text-decoration": "underline" }}
                >
                  {isSignInState
                    ? "Don't have an account? Sign Up"
                    : "Have an account? Log In"}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
