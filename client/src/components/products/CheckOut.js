import { Container, Grid, Typography, Box, Button, Checkbox, TextTextF, TextFieldield, TextFieldTextField, TextField } from "@mui/material"
import BreadCrumbs from "../commonComponents/breadCrumb/BreadCrumbs"
import contact1 from "../../static/images/contact/contact1.png"
import contact2 from "../../static/images/contact/contact2.png"
import contact3 from "../../static/images/contact/contact3.png"
import contact4 from "../../static/images/contact/contact4.png"
import contact5 from "../../static/images/contact/contact5.png"
import { Link } from "react-router-dom"
import { themeStyles } from "../../themeStyles"
import { useEffect, useState } from "react"
import { Field, Form } from "react-final-form"
import TextInput from "../commonComponents/library/form/TextInput"
import axios from "axios"



const CheckOutPage = () => {

  const breadCrumbs = [
    { to: '/', placeholder: 'Home' },
    { to: '/products', label: 'Products' },
  ]
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('cartProducts')))
  }, [])

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.sale_price ? product.sale_price : product.price;
    });
    setTotalPrice(total);
  }, [products]);


  const handleSubmit = (data) => {
    axios.post("http://localhost:5000/api/orders/new", {data, products: products}).then( result => {}).catch(( err => console.log(err) ))
  }



  return (
    <Box>
      <Container maxWidth={'xl'} disableGutters sx={{ 'background': 'var(--bread-crumbs)' }}  >
        <BreadCrumbs breadCrumbs={breadCrumbs} active={"Shipping"} />
      </Container>
      <Container maxWidth={"md"} disableGutters >
        <Form
          onSubmit={handleSubmit}
          validate={(data) => {
            const errors = {}

            if(!data.contact) errors.contact = "Contact information is require"
            if(data.contact < 5) errors.contact = "Please enter a valid contact information"
            if(!data.lastName) errors.lastName = "Enter Last Name"
            if(data.lastName < 5) errors.lastName = "Last Name will be more then 3 Charactors"
            if(!data.city) errors.city = "City Name is required"
            if(!data.country) errors.country = "Country Name is required"
            if(!data.postalCode) errors.postalCode = "Enter Postal Code"


            return errors
          }}
          render={(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Grid container mt={9} mb={9}   >
                  <Grid item md={7} xs={12} mr={'20px'} sx={{ "backgroundColor": '#F8F8FD' }} >
                    <Box px={3} py={8} sx={{ "py": { xs: 4, md: 8 } }} >
                      <Box display={"flex"} justifyContent={"space-between"} sx={{ "flexDirection": { xs: "column", md: "row" }, "textAlign": "center" }} mb={2} >
                        <Box  >
                          <Typography fontSize={'18px'} fontFamily={"var(--josefin)"} fontWeight={700} >Contact Information</Typography>
                        </Box>
                        <Box display={"flex"} sx={{ "justifyContent": "center" }} >
                          <Typography color={"#C1C8E1"} fontSize={"16px"} fontFamily={"var(--lato)"} fontWeight={500} mr={1}  >Already have an account?</Typography>
                          <Link style={{ "color": "#C1C8E1", "fontFamily": "var(--lato)", "fontSize": "16px", "fontWeight": "500" }} to="/login" >Log in</Link>
                        </Box>
                      </Box>

                      <Box mb={2}>
                        <Field variant="standard"  component={TextInput} type='text' name="contact" placeholder="Enter Email or Phone number" sx={{ ...themeStyles.CheckOutpageInput }} />
                      </Box>
                      <Box display={"flex"} alignItems={"center"} >
                        <Checkbox size="small" color="success" defaultChecked />
                        <Typography fontFamily={"var(--josefin)"} fontSize={"10px"} >Keep me up to date on news and excluive offers</Typography>
                      </Box>
                      <Box mb={2} sx={{ "mt": { xs: 3, md: "9" } }}  >
                        <Typography fontSize={'18px'} fontFamily={"var(--josefin)"} fontWeight={700} >Shipping address</Typography>
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} sx={{ "flexDirection": { xs: "column", md: "row" } }} >
                        <Box mb={2} sx={{ "width": { xs: "100%", md: "230px" } }}  >
                          <Field variant="standard"  component={TextInput} type='text' name="firstName" placeholder="First name (optional)" sx={{ ...themeStyles.CheckOutpageInput }} />
                        </Box>
                        <Box mb={2} sx={{ "width": { xs: "100%", md: "230px" } }}>
                        <Field variant="standard"  component={TextInput} type='text' name="lastName" placeholder="Last name" sx={{ ...themeStyles.CheckOutpageInput }} />
                        </Box>
                      </Box>
                      <Box mb={2}>
                      <Field variant="standard"  component={TextInput} type='text' name="appartment" placeholder="Appaetnentment,suit,e.t.c (optinal)" sx={{ ...themeStyles.CheckOutpageInput }} />
                      </Box>
                      <Box mb={2}>
                        <Field variant="standard"  component={TextInput} type='text' name="city" placeholder="City" sx={{ ...themeStyles.CheckOutpageInput }} />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} sx={{ "flexDirection": { xs: "column", md: "row" } }} >
                        <Box mb={2} sx={{ "width": { xs: "100%", md: "230px" } }} >
                        <Field variant="standard"  component={TextInput} type='text' name="country"  placeholder="Bangladesh"  sx={{ ...themeStyles.CheckOutpageInput }} />
                        </Box>
                        <Box mb={2} sx={{ "width": { xs: "100%", md: "230px" } }}>
                        <Field variant="standard"  component={TextInput} type='text' name="postalCode"   placeholder="Postal Code"  sx={{ ...themeStyles.CheckOutpageInput }} />
                        </Box>
                      </Box>

                      <Box sx={{ "mt": { xs: 4, md: 14 } }} >
                        <Button component={Link} to="/products" variant='contained' style={{ 'backgroundColor': 'var(--pink)', 'borderRadius': 0, 'padding': '6px 30px', 'fontFamily': 'Josefin Sans', 'fontSize': '16px', 'letterSpacing': '0.02em' }} >Continue Shipping</Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12} sx={{ 'marginTop': { xs: '30px', md: "0px" } }} display={"flex"} flexDirection={"column"} >
                    {
                      products && products.map((product, index) => {
                        return (
                          <>
                            <Grid key={index} item md={12} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={1} pb={1} borderBottom={"1px solid #E1E1E4"} >
                              <Grid item md={9} display={"flex"}   >
                                <Box display={"flex"} justifyContent={'space-between'} >
                                  <Box width={'84px'} marginRight={"10px"} >
                                    <img src={contact1} alt="img1" width={"100%"} />
                                  </Box>
                                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-evenly'} >
                                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"}  >{product.name}</Typography>
                                    {
                                      product.color &&
                                      <Typography color="#A1A8C1" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Color: {product.color}</Typography>
                                    }
                                    {
                                      product.size &&
                                      <Typography color="#A1A8C1" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Size : {product.size}</Typography>
                                    }
                                  </Box>
                                </Box>
                              </Grid>
                              <Grid item md={3} >
                                <Box display={"flex"} justifyContent={"flex-end"} >
                                  <Box>
                                    <Typography>{product.sale_price ? product.sale_price : product.price}</Typography>
                                  </Box>
                                </Box>
                              </Grid>
                            </Grid>
                          </>
                        )
                      })
                    }

                    <Grid item md={12} mt={3} >
                      <Box sx={{ "backgroundColor": "#F4F4FC" }} p={3} pb={0} >
                        <Box mb={5} display={"flex"} justifyContent={"space-between"} borderBottom={"2px solid #E8E6F1"} >
                          <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} lineHeight={"20px"} >Subtotals :</Typography>
                          <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} >${totalPrice}</Typography>
                        </Box>
                        <Box mb={5} display={"flex"} justifyContent={"space-between"} borderBottom={"2px solid #E8E6F1"} >
                          <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} lineHeight={"20px"} >Totals :</Typography>
                          <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} >${totalPrice + 30}</Typography>
                        </Box>
                        <Box mb={4} display={"flex"} flexDirection={'column'}   >
                          <Box mb={3} display={"flex"} alignItems={"center"} >
                            <Checkbox size="small" color="success" defaultChecked />
                            <Typography fontFamily={"var(--josefin)"} fontSize={"10px"} >Shipping & taxes calculated at checkout</Typography>
                          </Box>
                          <Box display={"flex"} alignItems={"center"}  >
                            <Button variant="contained" type="submit" style={{ "backgroundColor": "#19D16F", "width": "100%", "color": "white", "fontSize": "14px", "fontFamily": "var(--lato)", "fontWeight": "700", "fontStyle": "normal", "marginBottom": "20px" }} >Proceed To Checkout</Button>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )
          }}
        />
      </Container>
    </Box>
  )
}

export default CheckOutPage