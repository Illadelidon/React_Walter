import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Field } from "formik";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../../components/loader";


const initialValues = { email: "", password: "", rememberMe: false };

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();








export default function AddUsers() {
  const { AddUser } = useActions();
  const { loading } = useTypedSelector((store) => store.UserReducer);



  if (loading) {
    return <Loader />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      FirstName:data.get("firstName"),
      LastName:data.get("lastName"),
      email: data.get("email"),
      role:data.get("role"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    AddUser(user);
    /// data from server
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          <Typography component="h1" variant="h5">
            Create
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={() => {}}
            
          >
            {({ errors, touched, isSubmitting, isValid, dirty }) => (
              <Box
                onSubmit={handleSubmit}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="FirstName"
                  label="First Name"
                  type="text"
                  id="firstName"
                />
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="LastName"
                  label="Last Name"
                  type="text"
                  id="lastName"
                />
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                 {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                 {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                />
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  type="text"
                  id="role"
                />
                
                <Button
                  
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add User
                </Button>
               
                
              </Box>
               )}
               </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
