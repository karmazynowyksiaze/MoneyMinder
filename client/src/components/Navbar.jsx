import {Link} from "react-router-dom"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";


export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" style={{ background: '#2C2C2F', width: '100.85%', margin: '-8px'}}>
        <Toolbar >
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 200,
              textDecoration: 'none',
            }}
          >
            Praca inżynierska
          </Typography>
          <Button color="inherit">Wydatki</Button>
          <Button color="inherit">Przychód</Button>
          <Button color="inherit">Twoje konto</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
