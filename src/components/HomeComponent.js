import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import '../App.css';

 const HomePage = () => {
    return (
        <div className="home">
            <Box ml={8}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper className="Paper">xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className="Paper">xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className="Paper">xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className="Paper">xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className="Paper">xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className="Paper">xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className="Paper">xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default HomePage;
