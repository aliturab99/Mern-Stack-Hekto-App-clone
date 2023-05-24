import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { themeStyles } from '../../../themeStyles';
import getUpdateImage from '../../../static/images/updates/update1.png';

import { useTheme } from '@emotion/react';

const GetUpdates = () => {

   

    return (
        <>
        <Box mt={5} mb={5} display="flex" justifyContent='center' sx={{ "backgroundImage" : `url(${getUpdateImage})`,'backgroundPosition':'center' }}>
        <Grid container maxWidth={'xl'} sx={{ 'height':'300px' }}>
            <Box sx={{'width':'550px','marginX':'auto','marginY':'auto'}}  >
                <Box>
                    <Typography sx={{ ...themeStyles.updatesHeading }}>Get Latest Update By Subscribe Our Newsletter</Typography>
                </Box>
                <Box textAlign={'center'} >
                    <Button sx={{ ...themeStyles.Btn }}>Shop Now</Button>
                </Box>
            </Box>
        </Grid>
        </Box>

        </>
    );
};

export default GetUpdates;