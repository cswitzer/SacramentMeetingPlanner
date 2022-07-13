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
      <AppBar position='static' sx={{ background: "black" }}>
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
            color='#fafafa'
            underline='hover'
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to='/add-plan'
            color='#fafafa'
            underline='hover'
            sx={{ my: 1, mx: 1.5 }}
          >
            Add Meeting
          </Link>
          <Link
            component={RouterLink}
            to='/add-member'
            color='#fafafa'
            underline='hover'
            sx={{ my: 1, mx: 1.5 }}
          >
            Add Member
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
