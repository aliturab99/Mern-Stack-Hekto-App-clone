import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from '@mui/system'
import React from 'react'
import { theme, themeStyles } from '../../../themeStyles'
import ProductCardVertical from '../ProductCardVertical'
import Slider from "react-slick";
import featureimg1 from "../../../static/images/products/featured1.png"
import featureimg2 from "../../../static/images/products/featured2.png"
import featureimg3 from "../../../static/images/products/featured3.png"
import featureimg4 from "../../../static/images/products/featured4.png"

function FeaturedProducts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4 ,
    arrows: false,
    autoplay: true
};

  return (

    <>
        <Box mt={5} textAlign="center">
        <Typography variant="h1" sx={{ ...themeStyles.mainHeading, fontSize: !isMobile ? '42px' : '32px' }}>Featured Products</Typography>
      </Box>
        <Box>
          <Slider key={isMobile ? "mobile" : "desktop"} {...settings}>
            <ProductCardVertical productImg={featureimg1} isMobile={isMobile} />
            <ProductCardVertical productImg={featureimg2} isMobile={isMobile} />
            <ProductCardVertical productImg={featureimg3} isMobile={isMobile} />
            <ProductCardVertical productImg={featureimg4} isMobile={isMobile} />
            
            <ProductCardVertical productImg={featureimg1} isMobile={isMobile} />
            <ProductCardVertical productImg={featureimg2} isMobile={isMobile} />
            <ProductCardVertical productImg={featureimg3} isMobile={isMobile} />
            <ProductCardVertical productImg={featureimg4} isMobile={isMobile} />
          </Slider>
        </Box>
    </>

  )
}

export default FeaturedProducts