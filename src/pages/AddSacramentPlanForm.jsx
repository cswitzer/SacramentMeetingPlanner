import React from "react"
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

const members = [
  { MemberId: 1, FullName: "Chase Switzer" },
  { MemberId: 2, FullName: "Lily Switzer" },
  { MemberId: 3, FullName: "David Matthews" },
  { MemberId: 4, FullName: "Janice Johnson" },
  { MemberId: 5, FullName: "James Cameron" },
]

const hymns = [
  { HymnNumber: 1, HymnTitle: "The Morning Breaks", HymnType: "Restoration" },
  { HymnNumber: 2, HymnTitle: "The Spirit of God", HymnType: "Restoration" },
  { HymnNumber: 3, HymnTitle: "Now Let Us Rejoice", HymnType: "Restoration" },
]

const AddSacramentPlanForm = () => {
  const theme = createTheme()

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
              options={members.map((member) => member.FullName)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Conducting Leader' />
              )}
            />
            <Autocomplete
              options={members.map((member) => member.FullName)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Opening Prayer' />
              )}
            />
            <Autocomplete
              options={members.map((member) => member.FullName)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Sacrament Prayer' />
              )}
            />
            <Autocomplete
              options={members.map((member) => member.FullName)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Closing Prayer' />
              )}
            />
            <Autocomplete
              options={hymns.map((hymn) => hymn.HymnTitle)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Opening Hymn' />
              )}
            />
            <Autocomplete
              options={hymns.map((hymn) => hymn.HymnTitle)}
              renderInput={(params) => (
                <TextField {...params} label='Sacrament Hymn' />
              )}
            />
            <Autocomplete
              options={hymns.map((hymn) => hymn.HymnTitle)}
              renderInput={(params) => (
                <TextField {...params} label='Intermediate Hymn' />
              )}
            />
            <Autocomplete
              options={hymns.map((hymn) => hymn.HymnTitle)}
              renderInput={(params) => (
                <TextField {...params} label='Closing Hymn' />
              )}
            />
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default AddSacramentPlanForm
