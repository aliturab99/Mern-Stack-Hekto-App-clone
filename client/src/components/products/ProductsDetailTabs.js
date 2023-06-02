import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { themeStyles } from '../../themeStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Reviews } from '@mui/icons-material';

function ProductsDetailTabs({ description, additionalInfo, reviews }) {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);


  return (
    <Container maxWidth="md">
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
              color: 'var(--off-blue) !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'var(--off-blue)',
            }
          }}
        >
          <Tab label="Description" id={`simple-tabpanel-0`} sx={{ ...themeStyles.prductDescriptionTabsTitle, }} />
          <Tab label="Additional Information" id={`simple-tabpannel-1`} sx={{ ...themeStyles.prductDescriptionTabsTitle, }} />
          <Tab label="Reviews" id={`simple-tabpanel-2`} sx={{ ...themeStyles.prductDescriptionTabsTitle, }} />
        </Tabs>
      </Box>

      <div role="tabpanel" hidden={value !== 0} aria-labelledby={`simple-tab-${0}`} >
        <Box paddingTop={9}>
          <Typography sx={{ ...themeStyles.prductDescriptionHeading }}>
            Description
          </Typography>
          <Typography sx={{ ...themeStyles.productDescriptionText }}>
            {
              description
            }
          </Typography>
        </Box>

        <Box paddingTop={5}>
          <Typography sx={{ ...themeStyles.prductDescriptionHeading }}>
            More details
          </Typography>
          <Box>
            <Typography sx={{ ...themeStyles.productDescriptionPoints }}>
              <ArrowForwardIcon sx={{ ...themeStyles.productDescriptionPointIcon }} /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc.
            </Typography>
          </Box>
        </Box>
      </div>
      <div role="tabpanel" hidden={value !== 1} aria-labelledby={`simple-tab-${1}`} >
        <Box paddingTop={9}>
          <Typography sx={{ ...themeStyles.prductDescriptionHeading }}>
            Addtional Infomation
          </Typography>
          <Typography sx={{ ...themeStyles.productDescriptionText }}>
            {
              additionalInfo
            }
          </Typography>
        </Box>
      </div>
      <div role="tabpanel" hidden={value !== 2} aria-labelledby={`simple-tab-${2}`}>
      <Box paddingTop={9}>
          <Typography sx={{ ...themeStyles.prductDescriptionHeading }}>
            Product Review
          </Typography>
          <Typography sx={{ ...themeStyles.productDescriptionText }}>
            {
              reviews ? reviews : "Not Rated Yet"
            }
          </Typography>
        </Box>
      </div>
    </Container>
  )
}

export default ProductsDetailTabs