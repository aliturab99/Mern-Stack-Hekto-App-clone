import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material"
import ShopProductCard from "../ShopProductCard";
import trendingImage1 from '../../../static/images/trendingProducts/trending1.png';
import trendingImage2 from '../../../static/images/trendingProducts/trending2.png';
import trendingImage3 from '../../../static/images/trendingProducts/trending3.png';
import trendingImage4 from '../../../static/images/trendingProducts/trending4.png';
import { themeStyles } from "../../../themeStyles";

import discountProduct1 from '../../../static/images/trendingProducts/discountProduct1.png';
import discountProduct2 from '../../../static/images/trendingProducts/discountProduct2.png';
import discountProduct3 from '../../../static/images/trendingProducts/discountProduct3.png';
import discountProduct4 from '../../../static/images/trendingProducts/discountProduct4.png';
import discountProduct5 from '../../../static/images/trendingProducts/discountProduct5.png';
  import { Link } from "react-router-dom";



function TrendingProducts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <Box mt={5} textAlign="center">
            <Typography variant="h1" sx={{ ...themeStyles.mainHeading, color: '#151875', fontSize: !isMobile ? '42px' : '32px' }}>Trending Products</Typography>
        </Box>

        <Grid container columnSpacing={1}>
            <ShopProductCard 
              columnNumber={3}
              productImage={trendingImage1} 
              isMobile={isMobile}
              title="Cantilever chair"
              price="$26.00"
              discount="$13.00"
              saleText="50% OFF"
              detailsBoxStyle={{ flexDirection: 'column', justifyContent: 'space-between', 'alignItems': 'center' }}
              priceStyle={{ marginRight: '20px' }}
              titleStyle={{ fontFamily: 'var(--lato)', fontWeight: '700', marginBottom: '10px' }}
              discountStyle={{ color: 'var(--dark-light)' }}
              saleTagHoverStyle={{ visibility: 'hidden'}}
              iconsHoverStyle={{ visibility: 'hidden'}}
              paperStyle={{ 'padding': '10px' }}
              imageBoxStyle={{ backgroundColor: '#F5F6F8' }}
              imageHoverStyle={{ backgroundColor: '#F5F6F8' }}
            />

            <ShopProductCard 
              columnNumber={3}
              productImage={trendingImage2} 
              isMobile={isMobile}
              title="Cantilever chair"
              price="$26.00"
              discount="$13.00"
              saleText="50% OFF"
              detailsBoxStyle={{ flexDirection: 'column', justifyContent: 'space-between', 'alignItems': 'center' }}
              priceStyle={{ marginRight: '20px' }}
              titleStyle={{ fontFamily: 'var(--lato)', fontWeight: '700', marginBottom: '10px' }}
              discountStyle={{ color: 'var(--dark-light)' }}
              saleTagHoverStyle={{ visibility: 'hidden'}}
              iconsHoverStyle={{ visibility: 'hidden'}}
              paperStyle={{ 'padding': '10px' }}
              imageBoxStyle={{ backgroundColor: '#F5F6F8' }}
              imageHoverStyle={{ backgroundColor: '#F5F6F8' }}
            />

            <ShopProductCard 
              columnNumber={3}
              productImage={trendingImage3} 
              isMobile={isMobile}
              title="Cantilever chair"
              price="$26.00"
              discount="$13.00"
              saleText="50% OFF"
              detailsBoxStyle={{ flexDirection: 'column', justifyContent: 'space-between', 'alignItems': 'center' }}
              priceStyle={{ marginRight: '20px' }}
              titleStyle={{ fontFamily: 'var(--lato)', fontWeight: '700', marginBottom: '10px' }}
              discountStyle={{ color: 'var(--dark-light)' }}
              saleTagHoverStyle={{ visibility: 'hidden'}}
              iconsHoverStyle={{ visibility: 'hidden'}}
              paperStyle={{ 'padding': '10px' }}
              imageBoxStyle={{ backgroundColor: '#F5F6F8' }}
              imageHoverStyle={{ backgroundColor: '#F5F6F8' }}
            />

            <ShopProductCard 
              columnNumber={3}
              productImage={trendingImage4} 
              isMobile={isMobile}
              title="Cantilever chair"
              price="$26.00"
              discount="$13.00"
              saleText="50% OFF"
              detailsBoxStyle={{ flexDirection: 'column', justifyContent: 'space-between', 'alignItems': 'center' }}
              priceStyle={{ marginRight: '20px' }}
              titleStyle={{ fontFamily: 'var(--lato)', fontWeight: '700', marginBottom: '10px' }}
              discountStyle={{ color: 'var(--dark-light)' }}
              saleTagHoverStyle={{ visibility: 'hidden'}}
              iconsHoverStyle={{ visibility: 'hidden'}}
              paperStyle={{ 'padding': '10px' }}
              imageBoxStyle={{ backgroundColor: '#F5F6F8' }}
              imageHoverStyle={{ backgroundColor: '#F5F6F8' }}
            />
            
        </Grid>
        {/* Dscount Boxes Section starting  */}
        <Grid container justifyContent={'space-between'} mt={5} mb={5} >
                <Grid item xs={12} mb={2} md={4} style={{ 'backgroundColor': 'var(--light-pink)', 'height': '250px' }} >
                    <Box>
                        <Box p={2} >
                            <Typography fontSize={'24px'} fontWeight={'600'} fontFamily={'var(--josefin)'} fontStyle={'normal'} >23% off in all products</Typography>
                            <Typography fontSize={'16px'} fontWeight={'600'} fontFamily={'var(--lato)'} fontStyle={'normal'} color='red' ><Link to='#' style={{ color: 'red' }} > Shop Now </Link></Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Box width={'170px'} display={'flex'} justifyContent={'flex-end'} >
                                <img src={discountProduct1} alt='img' width={'100%'} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} mb={2} md={4} style={{ 'backgroundColor': 'var(--light-blue)', 'height': '250px' }} >
                    <Box>
                        <Box p={2} >
                            <Typography fontSize={'24px'} fontWeight={'600'} fontFamily={'var(--josefin)'} fontStyle={'normal'} >23% off in all products</Typography>
                            <Typography fontSize={'16px'} fontWeight={'600'} fontFamily={'var(--lato)'} fontStyle={'normal'}  ><Link to='#' style={{ color: 'red' }} >View Collection</Link></Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'flex-end'} mt={4} paddingRight={1} >
                            <Box width={'170px'} display={'flex'} justifyContent={'flex-end'} >
                                <img src={discountProduct2} alt='img' width={'120%'} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} style={{ 'height': '250px' }} >
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'} >
                        <Box display={'flex'} flexDirection={'row'} sx={{ height: { sm: '75px', xs: '80px' } }} >
                            <Box width={'35%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ 'backgroundColor': 'var(--light-blue2)' }} >
                                <img src={discountProduct3} alt='img' style={{maxWidth:'100%'}} height={'100%'} />
                            </Box>
                            <Box padding={1} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                                <Typography fontFamily={'var(--josefin)'} fontSize={'14px'} >Executive Seat chair</Typography>
                                <Typography fontFamily={'var(--josefin)'} fontSize={'12px'} fontWeight={'400'} >$32.00</Typography>
                            </Box>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{ height: { sm: '75px', xs: '80px' } }} >
                            <Box width={'35%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ 'backgroundColor': 'var(--light-blue2)' }}  >
                                <img src={discountProduct4} alt='img' style={{maxWidth:'100%'}}  height={'100%'} />
                            </Box>
                            <Box padding={1} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
                                <Typography fontFamily={'var(--josefin)'} fontSize={'14px'} >Executive Seat chair</Typography>
                                <Typography fontFamily={'var(--josefin)'} fontSize={'12px'} fontWeight={'400'} >$32.00</Typography>
                            </Box>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{ height: { sm: '75px', xs: '80px' } }} >
                            <Box width={'35%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ 'backgroundColor': 'var(--light-blue2)' }} >
                                <img src={discountProduct5} alt='img' style={{maxWidth:'100%'}} height={'100%'} />
                            </Box>
                            <Box padding={1} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
                                <Typography fontFamily={'var(--josefin)'} fontSize={'14px'} >Executive Seat chair</Typography>
                                <Typography fontFamily={'var(--josefin)'} fontSize={'12px'} fontWeight={'400'} >$32.00</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        {/* Discount Boxes Section Ending */}
      
    </>
  )
}

export default TrendingProducts