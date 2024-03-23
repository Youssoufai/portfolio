import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, CssBaseline, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import styled from 'styled-components';

const Navbar = () => {
    const CustomNav = styled("nav")({
        background: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: ".5rem .5rem"
    })
    return (
        <>
            <CssBaseline />
            <CustomNav>
                <Avatar
                    sx={{
                        padding: "1.3em"
                    }}
                >
                    SB
                </Avatar>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        <Typography fontWeight="bold">
                            Playground
                        </Typography>
                    </Button>
                    <Button color="inherit" component={Link} to="/playground">
                        <Typography fontWeight="bold">
                            Services
                        </Typography>
                    </Button>
                    <Button color="inherit" component={Link} to="/services"><Typography fontWeight="bold">
                        Case Studies
                    </Typography>
                    </Button>
                    <Button color='inherit' component={Link} to="/about">
                        <Typography fontWeight="bold">
                            About me
                        </Typography>
                    </Button>
                </Box>
                {/* Add more buttons as needed */}
                <Box>
                    Jakarta, Indonesia
                    <Typography
                        fontWeight="bold"
                    >
                        6:18:31 pm
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem"
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            bgcolor: 'rgba(0, 0, 0, 0.05)',
                            color: 'black',
                            border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}

                    >
                        Slot Booked
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            bgcolor: 'rgba(0, 0, 0, 0.05)',
                            color: 'black',
                            border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}

                    >
                        Slot Booked
                    </Button>
                    <Button variant='contained'
                        sx={{
                            bgcolor: "black",
                            color: 'white',
                            width: "8px",
                            height: "35px",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'

                        }}
                    >*</Button>
                </Box>
            </CustomNav>
        </>
    );
}

export default Navbar;
