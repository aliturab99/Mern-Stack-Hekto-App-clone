import { AddCircleOutline } from '@mui/icons-material'
import { Alert, Box, Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import { FORM_ERROR } from 'final-form'
import React, { useEffect } from 'react'
import { Field, Form } from 'react-final-form'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSuccess } from '../../store/actions/alertActions'
import { productActionTypes } from '../../store/actions/productActions'
import FileInput from '../library/FileInput'
import SelectInput from '../library/SelectInput'
import TextAreaInput from '../library/TextAreaInput'
import TextInput from '../library/TextInput'
import CheckBoxInput from '../library/CheckBoxInput'
import { loadAllCategories } from '../../store/actions/categoryActions'

function AddProduct( {  categories, brands } ) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(categories)

    useEffect(() => {
        dispatch(loadAllCategories())
        // dispatch(loadAllBrands())
    }, [])

    const validate = (data) => {
        const errors = {};

        if (!data.name)
            errors.name = "Product Name is Required";
        else if (data.name.length < 3)
            errors.name = "Name Should be more then 3 Char";
        if (!data.price) errors.price = "Please Enter Price";
        if (!data.categoryId || data.categoryId == ' ') errors.categoryId = "Please Select Category";
        return errors
    };




    const handleAddProduct = async (data, form) => {
        try {
            let result = await axios.postForm(
                "api/products/add",
                data
            );
            const fields = form.getRegisteredFields(); // Get all the registered field names
            fields.forEach((field) => {
                form.resetFieldState(field); // Reset the touched state for each field
                form.change(field, null); // Reset the value of each field to null
            });
            dispatch({ type: productActionTypes.ADD_PRODUCT, payload: result.data.product })
            dispatch(showSuccess("Product added successfully"))
            navigate("/admin/dashboard/products");
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
                onSubmit={handleAddProduct}
                validate={validate}
                initialValues={{}}
                render={({
                    handleSubmit,
                    submitting,
                    submitError,
                }) => (
                    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                        <Field component={TextInput} type='text' name="name" placeholder="Enter Product Name" label="Name" />
                        <Field component={TextAreaInput} type='text' name="shortDescription" placeholder="Product short description" label="Short description" />
                        <Field component={TextInput} type='number' name="price" placeholder="Product Price" label="Price" />
                        <Field component={TextInput} type='number' name="sale_price" placeholder="Sale Price" label="Sale Price" />
                        <Field component={TextInput} type='number' name="discountPrice" placeholder="Discount price" label="Discount price" />
                        <Field component={TextInput} type='color' name="color" placeholder="Color" label="Color" />
                        <Field component={TextInput} type='text' name="tags" placeholder="Product Tags" label="Tags" />
                        <Field component={TextAreaInput} type='text' name="longDescription" placeholder="Product long description" label="Long Description" />
                        <Field component={TextAreaInput} type='text' name="additionalInformation" placeholder="Additional information" label="Additional information" />
                        <Field component={FileInput} name="productPictures" inputProps={{ accept: "image/*", multiple: true }} />
                        
                        <Field
                            component={SelectInput}
                            name="categoryId"
                            label="Select category"
                            options={
                                categories && categories.map(category => ({ label: category.name, value: category._id }))
                            }
                            />

                        {/* <Field
                            component={SelectInput}
                            name="brandId"
                            label="Select brand"
                            options={
                                brands && brands.map(brand => ({ label: brand.name, value: brand._id }))
                            }
                            /> */}

                        <Field component={CheckBoxInput} name="isFeatured" label="Featured" />
                        <Field component={CheckBoxInput} name="isTrending" label="Trending" />
                        <Field component={CheckBoxInput} name="isTop" label="Top" />


                        {submitting ? (
                            <CircularProgress />
                        ) : (
                            <Button
                                sx={{ marginTop: '20px' }}
                                variant="contained"
                                color="success"
                                startIcon={<AddCircleOutline />} type="submit"
                                fullWidth
                                disabled={submitting}
                            >
                                Add Product
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

                    </form>
                )}
            />
        </Box>
  )
}

const mapStateToProps = state => {
    console.log(state.categories.categories)
    return {
        categories: state.categories.allCategories,
        // brands: state.brands.allBrands,
    }
}

export default connect(mapStateToProps)(AddProduct);
