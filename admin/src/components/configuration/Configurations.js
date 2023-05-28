import { Alert, Box, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';
import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showError, showSuccess } from '../../store/actions/alertActions';
import TextInput from '../library/TextInput';
import EditIcon from '@mui/icons-material/Edit';
import FileInput from '../library/FileInput';


function Configurations() {

    const [store, setStore] = useState({});
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
        try {
            axios.get("/api/store/").then(({ data }) => {
                console.log(data)
                setStore(data)
            })
        } catch (err) {
            dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
        }
    }, [])

    const handleUpdateStore = async (data, form) => {
        try {
            axios.postForm(`/api/store/edit`, data).then(result => {
                console.log(result)
            });
            dispatch(showSuccess("Store updated successfully"))
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
                initialValues={
                    {
                        siteName: store.siteName,
                        siteLogo: store.siteLogo,
                        siteAddress: store.siteAddress,
                        siteEmail: store.siteEmail,
                        sitePhoneNumber: store.sitePhoneNumber,
                        facebookLink: store.facebookLink,
                        twitterLink: store.twitterLink,
                        instagramLink: store.instagramLink
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
                        <Field component={TextInput} type='text' name="siteName" placeholder="Enter Site Name" label="Site Name" />
                        <Field component={FileInput} name="siteLogo" />
                        <Field component={TextInput} name="siteAddress" placeholder="address" label="Address" />
                        <Field component={TextInput} name="siteEmail" placeholder="email" label="Email" />
                        <Field component={TextInput} name="sitePhoneNumber" placeholder="phoneNumber" label="Phone Number" />
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
                                fullWidth
                                type="submit"
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