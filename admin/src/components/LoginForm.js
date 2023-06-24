import { Form, Field } from "react-final-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin } from "../store/actions/authActions";
import { showError, showSuccess } from "../store/actions/alertActions";



const LoginForm = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (data, form) => {
    axios.post("api/users/login", data).then(({ data }) => {
      dispatch(signin(data.user, data.token))
      localStorage.setItem("token", data.token)
      navigator("/admin/")
      dispatch(showSuccess("Signed in successfully"))
      // const fields = form.getRegisteredFields(); // Get all the registered field names
      // fields.forEach((field) => {
      //   form.resetFieldState(field); // Reset the touched state for each field
      //   form.change(field, null); // Reset the value of each field to null
      // });
    }).catch(err => {
      let message = err && err.response && err.response.data ? err.response.data.error : err.message
      dispatch(showError(message))
    })
  };
  const handleValidation = (data) => {
    const errors = {}

    if (!data.email)
      errors.email = "Email is required"
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
      errors.email = "Invalid Email"
    if (!data.password)
      errors.password = "Password is required"
    return errors
  }


  return (
    <div>
      <Box textAlign="center" maxWidth="500px" margin="auto">
        <Form
          onSubmit={handleSubmit}
          initialValues={{}}
          validate={handleValidation}
          render={({
            handleSubmit,
            submitting,
            submitError,
            submitSucceeded,
            invalid,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box boxShadow='0px 0px 25px 10px #F8F8FB' p={5} width="350px" >
                <Box>
                  <Typography color={"#000000"} fontFamily={"var(--josefin)"} fontSize={"32px"} fontWeight={700} >Login</Typography>
                </Box>
                <Box my={3}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <TextField
                        InputLabelProps={{ sx: { "color": "#9096B2", "fontFamily": "var(--lato)", "fontWeight": "400", "fontSize": "16px" } }}
                        {...input}
                        label="Email Address"
                        fullWidth
                        type="email"
                        name="email"
                        error={!!(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Box>
                <Box mb={2}>
                  <Field name="password">
                    {({ input, meta }) => (
                      <TextField
                        InputLabelProps={{ sx: { "color": "#9096B2", "fontFamily": "var(--lato)", "fontWeight": "400", "fontSize": "16px" } }}
                        {...input}
                        type="password"
                        label="Password"
                        name="password"
                        fullWidth
                        mb={2}
                        error={!!(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Box>
                <Box display={"flex"} mb={2} justifyContent={"flex-start"} >
                  <Typography color="#9096B2" fontFamily={"var(--lato)"} fontSize={"17px"} fontWeight={400} > <NavLink to={"/admin/forgot-password"}>Forgot your password?</NavLink> </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    style={{ "backgroundColor": "#FB2E86", "fontFamily": "16px", "fontFamily": "16px", "fontWeight": '700', 'fontFamily': "var(--lato)" }}
                    type="submit"
                    fullWidth
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        />
      </Box>
    </div>
  )
}

export default LoginForm