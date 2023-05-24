import { Container, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import DiscountItem from './DiscountItem';
import FeaturedProducts from './FeaturedProducts';
import GetUpdates from './GetUpdates';
import InfoSlider from './InfoSlider';
import LatestBlogs from './LatestBlogs';
import LatestProducts from './LatestProducts';
import OffersList from './OffersList';
import TopCategories from './TopCategories';
import TrendingProducts from './TrendingProducts';
import UniqueFeatures from './UniqueFeatures';
import sponsorsImage from '../../../static/images/products/sponsors.png'
import { useTheme } from '@emotion/react';
import HomeBanner from './HomeBanner';

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <InfoSlider />
      <Container maxWidth={"md"} disableGutters>
          <FeaturedProducts />
          <LatestProducts />
          <OffersList />
          <TrendingProducts />
      </Container>
      <Box mt={5} display="flex" justifyContent='center' sx={{ 'backgroundColor': 'var(--light-purple)' }}>
          <UniqueFeatures />
      </Box>
      <Container maxWidth={"md"} disableGutters>
        <DiscountItem />
        <TopCategories />
      </Container>
        <GetUpdates />
      <Container maxWidth={"md"} disableGutters>
        <HomeBanner />
        
      <Box sx={{ marginTop: isMobile ? '20px' : '75px' }}>
          <img src={sponsorsImage} style={{
            maxWidth: !isMobile ? '100%' : '100%',
            height: !isMobile ? 'auto' : 'auto',
          }} />
        </Box>
        <LatestBlogs />
      </Container>
    </>
  )
}

export default Home;