import { Alert, Box, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';
import React, { useEffect } from 'react'
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showSuccess } from '../../store/actions/alertActions';
import { categoryActionTypes } from '../../store/actions/categoryActions';
import TextInput from '../library/TextInput';
import EditIcon from '@mui/icons-material/Edit';
import FileInput from '../library/FileInput';
import { loadStore } from '../../store/actions/storeActions';


function Configurations() {

    const { id, rows, page } = useParams();


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const validate = (data) => {
        const errors = {};
        if (!data.name)
            errors.name = " Category name is Required";
        else if (data.name.length < 3)
            errors.name = "Name Should be more then 3 Char";
        return errors
    };

useEffect(() => {
    loadStore()
})

const handleUpdateStore = async (data, form) => {
        try {
            let result = await axios.postForm(
                `api/store/edit`,
                data
            );
            const fields = form.getRegisteredFields(); // Get all the registered field names
            fields.forEach((field) => {
                form.resetFieldState(field); // Reset the touched state for each field
                form.change(field, null); // Reset the value of each field to null
            });
            dispatch(showSuccess("Category updated successfully"))
            // Navigation will be added there
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return { [FORM_ERROR]: error.response.data.errors };
            }
            else
                return { [FORM_ERROR]: error.message };
        }

    };
  return (
    <Box textAlign="center" maxWidth="500px" mx="auto">
            <Form
                onSubmit={handleUpdateStore}
                // validate={validate}
                render={({
                    handleSubmit,
                    submitting,
                    submitError,
                    submitSucceeded,
                    invalid,
                }) => (
                    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                        <Field component={TextInput} type='text' name="siteName" placeholder="Enter Site Name" label="Site Name" />
                        <Field component={FileInput} name="siteLogo" />
                        <Field component={TextInput} name="address" placeholder="address" label="Address" />
                        <Field component={TextInput} name="email" placeholder="email" label="Email" />
                        <Field component={TextInput} name="phoneNumber" placeholder="phoneNumber" label="Phone Number" />
                        <Field component={TextInput} name="facebookLink" placeholder="facebookLink" label="FaceBook Link" />
                        <Field component={TextInput} name="twitterLink" placeholder="twitterLink" label="Twitter Link" />
                        <Field component={TextInput} name="instagramLink" placeholder="instagramLink" label="Instagram Link" />
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
                                // disabled={submitting || invalid}
                            >
                                Update Store
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
                                <Alert color="success">Category Added Successfully</Alert>
                            )}
                        </Box>
                    </form>
                )}
            />
        </Box>
  )
}

export default Configurations