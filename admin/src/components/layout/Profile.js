import { Alert, Avatar, Button, CircularProgress, Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { FORM_ERROR } from 'final-form'
import React, { useEffect } from 'react'
import { Field, Form } from 'react-final-form'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userActionTypes } from '../../store/actions/userActions'
import SelectInput from '../library/SelectInput'
import TextInput from '../library/TextInput'
import EditIcon from '@mui/icons-material/Edit';
import { authUpdate } from '../../store/actions/authActions'


function Profile({ user, authUpdate }) {
  const id = user._id
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const validate = (data) => {
    const errors = {};

    if (!data.name)
      errors.name = "name is Required";
    else if (data.name.length < 3)
      errors.name = "Name Should be more then 3 Char";
    if (!data.email) errors.email = "Please Enter Email";
    if (!data.phone_number) errors.phone_number = "Please Enter Phone Number";
    if (!data.type || data.type == ' ') errors.type = "Please Select User Type";
    return errors
  };



  const handleUpdateUser = async (data, form) => {
    try {
      data.id = id;
      let result = await axios.post(
        `api/users/profile-settings`,
        data
      );
      authUpdate(result.data.user)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { [FORM_ERROR]: error.response.data.errors };
      }
      else
        return { [FORM_ERROR]: error.message };
    }

  };


  return (
    <Box p={5}>
      <Grid
        container
        sx={{ "boxShadow": "0px 0px 10px 5px #ececec", "minHeight": "70vh" }}
      >
        <Grid
          item
          md={4}
          style={{ "borderRight": "1px solid #ececec" }}
        >
          <Box display={"flex"} pt={5} flexDirection="column" alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
              <Avatar
                sx={{ height: "100px", width: "100px" }}
              >
                {
                  user.name.slice(0, 1)
                }
              </Avatar>
              <h3>{user.name}</h3>
          </Box>
        </Grid>
        <Grid item md={8} p={2}>
          <Box textAlign="center" maxWidth="500px" mx="auto">
            <Form
              onSubmit={handleUpdateUser}
              validate={validate}
              initialValues={
                {
                  name: user && user.name,
                  email: user && user.email,
                  phone_number: user && user.phone_number,
                  type: user && user.type,
                }
              }
              render={({
                handleSubmit,
                submitting,
                submitError,
                submitSucceeded,
                invalid,
              }) => (
                <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                  <Field component={TextInput} type='text' name="name" placeholder="Enter Name" label="Name" />
                  <Field component={TextInput} type='email' name="email" placeholder="User Email" label="Email" />
                  <Field component={TextInput} type='number' name="phone_number" placeholder="Phone Number" label="Phone Number" />
                  <Field component={SelectInput} name="type" label="Type" options={[{ label: "Select user type", value: ' ' }, { label: "Super Admin", value: process.env.REACT_APP_USER_TYPE_SUPERADMIN }, { label: "Admin", value: process.env.REACT_APP_USER_TYPE_ADMIN }, { label: "Standard", value: process.env.REACT_APP_USER_TYPE_STANDARD }]} />

                  {submitting ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      sx={{ marginTop: '20px' }}
                      variant="contained"
                      color="success"
                      startIcon={<EditIcon />}
                      type="submit"
                      fullWidth
                      disabled={submitting || submitting}
                    >
                      Update Profile
                    </Button>
                  )}
                  {submitError && typeof submitError === 'string' && (
                    <Box mt={2}><Alert severity="error">{submitError}</Alert></Box>
                  )}

                  {submitError && Array.isArray(submitError) && (
                    <Box mt={2}>
                      {submitError.map((error, index) => (
                        <Alert key={index} severity="error">{error}</Alert>
                      ))}
                    </Box>
                  )}
                  <Box mt={2}>
                    {/* {error && <Alert severity="error">{error}</Alert>} */}
                  </Box>
                  <Box mt={2}>
                    {submitSucceeded && !submitting && (
                      <Alert color="success">User Added Successfully</Alert>
                    )}
                  </Box>
                </form>
              )}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return (
    {
      user: state.auth.user
    }
  )
}

export default connect(mapStateToProps, {authUpdate})(Profile)