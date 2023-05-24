import { useTheme } from '@emotion/react';
import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { themeStyles } from '../../../themeStyles'
import BlogCardVertical from './BlogCardVertical'

function LatestBlogs() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container mt={6} rowSpacing={5} columnSpacing={ !isMobile ? 3 : 0} sx={{...themeStyles.latestBlogsContainer}}>
        <Grid item md={12} xs={12} textAlign="center" mb={5}>
            <Typography sx={{...themeStyles.mainHeading}}>
                Leatest Blog
            </Typography>
        </Grid>
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
    </Grid>
  )
}

export default LatestBlogs