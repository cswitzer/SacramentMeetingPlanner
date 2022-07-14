import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

import Avatar from "@mui/material/Avatar"
import CssBaseline from "@mui/material/CssBaseline"
import Stack from "@mui/material/Stack"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import GroupsIcon from "@mui/icons-material/Groups"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const api = axios.create({
  baseURL: "https://localhost:7143",
})

const AddSacramentPlanForm = () => {
  const theme = createTheme()

  const [members, setMembers] = useState([])
  const [hymns, setHymns] = useState([])

  useEffect(() => {
    const fetchMembers = async () => {
      let { data } = await api.get("api/Members")
      setMembers(data)
    }

    const fetchHymns = async () => {
      let { data } = await api.get("api/Hymns")
      setHymns(data)
    }

    fetchMembers()
    fetchHymns()
  }, [])

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <GroupsIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Plan a Meeting
          </Typography>
          <Stack spacing={2} marginTop={2} width='400px'>
            <Autocomplete
              id='conducting_leader'
              options={members}
              getOptionLabel={(members) => `${members.fullName}`}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Conducting Leader' />
              )}
            />
            <Autocomplete
              id='opening_hymn'
              options={hymns}
              getOptionLabel={(hymns) => `${hymns.hymnTitle}`}
              key={(hymns) => `${hymns.hymnNumber}`}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Opening Hymn' />
              )}
            />
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default AddSacramentPlanForm
