import React, { useEffect, useState } from 'react'
import { loadSingleOrder } from '../../store/actions/orderActions'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';

function SingleOrder() {

  const { orderId, rows, page } = useParams();
  const [singleOrder, setSingleOrder] = useState({})
  const [subtotal, setSubtotal] = useState(0);


  useEffect(() => {
    axios.post("api/orders/singleOrder", { id: orderId }).then(({ data }) => {
      setSingleOrder(data.order)
    }).catch(err => console.log(err))
  }, [])
  console.log(singleOrder)

  useEffect(() => {
    // Calculate subtotal
    const calculateSubtotal = () => {
      let total = 0;
      if (singleOrder.products) {
        singleOrder.products.forEach(product => {
          const price = product.sale_product ? product.sale_product : product.price;
          const quantity = product.quantity ? product.quantity : 1;
          total += price * quantity;
        });
      }
      return total;
    };
  
    // Update subtotal state
    setSubtotal(calculateSubtotal());
  }, [singleOrder]);

  return (
    <Box>
      <Container>
        <Grid container >
          <Grid item md={12}>

            {/* Heading Area */}
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant='h5' fontWeight={800} >Order ID: {singleOrder._id}</Typography>
              <Box>
                <Button variant='outlined' sx={{ mr: 2 }}>Invoice</Button>
                <Button variant='contained'>Track Order</Button>
              </Box>
            </Box>
            <Box textAlign={"left"}>
              <Typography>Order date: {singleOrder.created_on}</Typography>
            </Box>

            {/* Divider */}
            <Box my={3}>
              <Divider />
            </Box>

          </Grid>

          {/* Mapping all the order products */}
          {
            singleOrder.products && singleOrder.products.map(product => {
              return (
                <Grid container sx={{ boxShadow: 3 }} py={3} px={2} my={1} >
                  <Grid item md={3}>
                    <img width={"50%"} src={process.env.REACT_APP_BASE_URL + "content/products/" + product._id + "/" + product.productPictures[0]  } />
                  </Grid>
                  <Grid item md={9} >
                    <Box display={"flex"} justifyContent={"space-between"} >
                      <Box>
                        <Typography variant='h6' fontWeight={800}>{product.name}</Typography>
                        <Typography>{product.color ? product.color : ""}</Typography>
                      </Box>
                      <Box>
                        <Typography variant='h6' fontWeight={600} >
                          $
                          {product.quantity
                            ? (product.sale_product ? product.sale_product : product.price) * product.quantity
                            : (product.sale_product ? product.sale_product : product.price)}
                        </Typography>
                        <Typography fontSize={"14px"} >Qty: {product.quantity ? product.quantity : 1}</Typography>
                      </Box>
                    </Box>
                  </Grid>

                </Grid>
              )
            })
          }
          {/* Divider */}
          <Box my={3}>
            <Divider />
          </Box>
          {/* Payment and Delivery information */}
          <Grid item md={12} display={"flex"} textAlign={"left"}>
            {/* Payment Information */}
            <Grid item md={4}>
              <Typography variant='h6'>
                Payment
              </Typography>
              <Typography variant='h6' fontSize={"17px"}>
                Cash on delivery
              </Typography>
            </Grid>


            <Divider orientation="vertical" flexItem />


            {/* Delivery information */}
            <Grid item md={8} ml={2}>
              <Typography variant='h6'>
                Delivery
              </Typography>
              <Typography variant='h6' fontSize={"17px"}>
                {
                  singleOrder.city && `City: ${singleOrder.city}`
                }
              </Typography>
              <Typography variant='h6' fontSize={"17px"}>
                {
                  singleOrder.country && `Country: ${singleOrder.country}`
                }
              </Typography>
              <Typography variant='h6' fontSize={"17px"}>
                {
                  singleOrder.postalCode && `Postal Code: ${singleOrder.postalCode}`
                }
              </Typography>
            </Grid>
          </Grid>


          {/* Order Summary */}
          <Grid item md={12}>

            {/* Divider */}
            <Box my={4}>
              <Divider />
            </Box>


            <Typography variant='h6'>
              Order Summary
            </Typography>

            {/* Summary Box */}
            <Box>

              {/* Subtotal  box */}
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant='h6' fontWeight={600}>
                  Subtotal
                </Typography>
                <Typography variant='h6' fontWeight={600}>
                ${subtotal.toFixed(2)}
                </Typography>
              </Box>


              {/* Divider */}
              <Box my={1}>
                <Divider />
              </Box>


              {/* Delivery Box */}
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography>
                  Delivery
                </Typography>
                <Typography>
                  $30
                </Typography>
              </Box>

              {/* Divider */}
              <Box my={1}>
                <Divider />
              </Box>
            </Box>



  {/* Total Box */}
  <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant='h6' fontWeight={800}>
                  Total
                </Typography>
                <Typography variant='h6' fontWeight={800}>
                  ${subtotal + 30}
                </Typography>
              </Box>

              {/* Divider */}
              <Box my={1}>
                <Divider />
              </Box>


          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SingleOrder