import EditIcon from '@mui/icons-material/Edit';
import { Alert, Button, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';
import React from 'react'
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { showSuccess } from "../../store/actions/alertActions";
import SelectInput from '../library/SelectInput';
import TextInput from '../library/TextInput';
import { categoryActionTypes } from '../../store/actions/categoryActions';



function EditCategory({ categories }) {
    const { id, rows, page } = useParams();
    const categoryIndex = categories.findIndex(category => category._id === id);

    const category = categories[categoryIndex];

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



    const handleUpdateCategory = async (data, form) => {
        try {
            data.id = id;
            let result = await axios.post(
                `api/category/edit`,
                data
            );

            const fields = form.getRegisteredFields(); // Get all the registered field names
            fields.forEach((field) => {
                form.resetFieldState(field); // Reset the touched state for each field
                form.change(field, null); // Reset the value of each field to null
            });
            dispatch({ type: categoryActionTypes.UPDATE_CATEGORY, payload: { category: result.data.category, categoryIndex } })
            dispatch(showSuccess("Category updated successfully"))
            navigate(`/admin/dashboard/categories/${rows}/${page}`);
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
                onSubmit={handleUpdateCategory}
                validate={validate}
                initialValues={
                    {
                        name: category && category.name,
                        description: category && category.description
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
                        <Field component={TextInput} name="description" placeholder="Description" label="Description" />
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
                                disabled={submitting || invalid}
                            >
                                Update Category
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

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}
const Wrapper = connect(mapStateToProps)

export default Wrapper(EditCategory);