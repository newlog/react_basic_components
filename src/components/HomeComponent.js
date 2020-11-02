import React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import '../App.css';

 const HomePage = () => {
    return (
        <Box ml={8} className="home">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h1" className="homeLogo">
                        Overflowed Minds.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
