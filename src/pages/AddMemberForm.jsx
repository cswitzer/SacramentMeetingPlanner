import React, { useState, useEffect } from "react"
import axios from "axios"

import Avatar from "@mui/material/Avatar"
import CssBaseline from "@mui/material/CssBaseline"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import InputAdornment from "@mui/material/InputAdornment"

import PersonAddIcon from "@mui/icons-material/PersonAdd"
import IconButton from "@mui/material/IconButton"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const api = axios.create({
  baseURL: "https://localhost:7143",
})

const AddMemberForm = () => {
  const theme = createTheme()

  const [name, setName] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    // this will post the member to be created
    const members = await api.get("api/Members")
    // TODO: toast showing success or failure
    // TODO: if successful, use useNavigate to show list of all members
    console.log(members)
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#00e676" }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Add a Member
          </Typography>
          <Stack
            component='form'
            onSubmit={onSubmit}
            spacing={2}
            marginTop={2}
            width='400px'
          >
            <TextField
              required
              label='Full Name'
              id='name'
              onChange={onChange}
              value={name}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton type='submit'>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default AddMemberForm
