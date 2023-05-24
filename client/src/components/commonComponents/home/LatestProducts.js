import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { themeStyles } from "../../../themeStyles"
import ShopProductCard from "../ShopProductCard";
import latestProduct1 from '../../../static/images/products/LatestProducts1.png'
import latestProduct2 from '../../../static/images/products/LatestProducts2.png'
import latestProduct3 from '../../../static/images/products/LatestProducts3.png'
import latestProduct4 from '../../../static/images/products/LatestProducts4.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';


function LatestProducts() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    return (
        <>
            <Box mt={12} >
                <Typography sx={{ ...themeStyles.mainHeading, textAlign: "center" }}>Latest Products</Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        indicatorColor="secondary"
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile

                        sx={{
                            '& .Mui-selected': {
                                color: 'var(--pink)',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'var(--pink)'
                            }
                        }}
                    >
                        <Tab label="New Arival" id={`simple-tabpanel-0`} sx={{ ...themeStyles.singleTab }} />
                        <Tab label="Best Seller" id={`simple-tabpannel-1`} sx={{ ...themeStyles.singleTab }} />
                        <Tab label="Featured" id={`simple-tabpanel-2`} sx={{ ...themeStyles.singleTab }} />
                        <Tab label="Special Offer" id={`simple-tabpanel-2`} sx={{ ...themeStyles.singleTab }} />
                    </Tabs>
                </Box>
                <div role="tabpanel" hidden={value !== 0} aria-labelledby={`simple-tab-${0}`} >
                    <Grid container columnSpacing={3}>
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    </Grid>
                </div>
                <div role="tabpanel" hidden={value !== 1} aria-labelledby={`simple-tab-${1}`} >
                <Grid container columnSpacing={3}>
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    </Grid>
                </div>
                <div role="tabpanel" hidden={value !== 2} aria-labelledby={`simple-tab-${2}`}>
                <Grid container columnSpacing={3}>
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImage={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    </Grid>
                </div>
                <div role="tabpanel" hidden={value !== 3} aria-labelledby={`simple-tab-${3}`}>
                <Grid container columnSpacing={3}>
                        <ShopProductCard
                            productImg={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImg={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    
                        <ShopProductCard
                            productImg={latestProduct1}
                            title={"RevolvingChair"}
                            price={"$42.00"}
                            discount={"$65.00"}
                            saleText={"50% OFF"}
                            isMobile={isMobile}
                            columnNumber={4}
                            paperStyle={{}}
                            imgHoverStyle={{}}
                            iconHoverStyle={{}}
                            paperHoverStyle={{}}
                            saleTagHoverStyle={{}}
                            imgBoxStyle={{}}
                            imgStyle={{}}
                            saleTagStyle={{}}
                            saleBoxStyle={{}}
                            iconsStyle={{}}
                            detailsBoxStyle={{}}
                            titleStyle={{}}
                            priceStyle={{}}
                            discountStyle={{}}
                        />
                    </Grid>
                </div>
            </Box>

        </>
    )
}

export default LatestProducts