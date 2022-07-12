import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        {/* Toolbar sets flex positioning to row */}
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ mr: 2, flexGrow: 1 }}>
            Sacrament Meeting Planner
          </Typography>
          <Link
            component={RouterLink}
            to='/'
            color='text.primary'
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to='/sacrament-plan'
            color='text.primary'
            sx={{ my: 1, mx: 1.5 }}
          >
            Plan A Meeting
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
