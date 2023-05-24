import { Box, Button, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { themeStyles } from '../../../themeStyles'

const BreadCrumbs = ({breadCrumbs}) => {

    
    return (
        <Container maxWidth={"md"}  >
            <Box sx={{...themeStyles.breadcrumbsBox}} >
                <Box>
                    <Typography sx={{...themeStyles.breaCrumbsHeading }} >Shop Grid Default</Typography>
                </Box>
                <Box>
                    {
                        breadCrumbs.map((obj,index) => (
                            <Button style={themeStyles.navbarMenu}key={index} >
                                <Link style={{...themeStyles.breaCrumbsLink,"color":'black'}} to={obj.path} >{obj.label}.</Link>
                            </Button>
                        ))
                    }
                    <Button style={{...themeStyles.navbarMenu}} >
                        <Link style={{...themeStyles.breaCrumbsLink}} >Shop Grid Default</Link>
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default BreadCrumbs