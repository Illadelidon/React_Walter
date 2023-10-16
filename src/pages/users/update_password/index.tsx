import React, { useState } from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { RegisterSchema } from "../../auth/validation";
import { UpdateUserSchema } from "../../auth/validation";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";






const UpdatePassword: React.FC = () => {
  const [role, setRole] = useState("Users");
  const { UpdatePassword } = useActions();
  const { message } = useTypedSelector((store) => store.UserReducer);
  const {user}=useTypedSelector((store)=>store.UserReducer)

  

  const initialValues = {
    OldPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
   
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
   
        
    const newPassword = {
      userId :user.Id,
      OldPassword: data.get("oldpassword"),
      NewPassword: data.get("newpassword"),
      ConfirmPassword: data.get("confirmpassword"),
     
    };
    console.log(newPassword)
    UpdatePassword(newPassword);
    window.location.href='/dashboard'   
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            onSubmit={() => {}}
            initialValues={initialValues}
            validationSchema={UpdateUserSchema}
          >
            
              <Box
                sx={{ my: 3 }}
                onSubmit={handleSubmit}
                component="form"
                noValidate
              >
                <Typography color="textPrimary" variant="h4">
                  Update Password
                </Typography>
                
                <Field
                  as={TextField}
                  fullWidth
                  label="Old Password"
                  margin="normal"
                  name="oldpassword"
                  variant="outlined"
                  type="password"
                />
                
                <Field
                  as={TextField}
                  fullWidth
                  label="New Password"
                  margin="normal"
                  name="newpassword"
                  variant="outlined"
                  type="password"
                />
               
                <Field
                  as={TextField}
                  fullWidth
                  label="Confirm Password"
                  margin="normal"
                  name="confirmpassword"
                  type="password"
                  variant="outlined"
                />
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    ml: -1,
                  }}
                ></Box>
                <Box sx={{ py: 2 }}>
                  <Button
                    
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {  "Update"}
                  </Button>
                </Box>
              </Box>
        
          </Formik>
        </Container>
      </Box>
    </>
  );
};
export default UpdatePassword;
