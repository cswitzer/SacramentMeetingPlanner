import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

import Avatar from "@mui/material/Avatar"
import CssBaseline from "@mui/material/CssBaseline"
import Stack from "@mui/material/Stack"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
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

  // when changing one of the autocomplete fields, I will use their ID's to update the form
  const [form, setForm] = useState({
    ConductingLeaderId: 0,
    OpeningPrayerId: 0,
    SacramentPrayerId: 0,
    ClosingPrayerId: 0,
    OpeningHymnId: 0,
    SacramentHymnId: 0,
    IntermediateHymnId: 0,
    ClosingHymnId: 0,
    Speakers: [{}],
  })
  const [members, setMembers] = useState([])
  const [hymns, setHymns] = useState([])
  // dynamically set number of speakers
  const [numSpeakerFields, setNumberSpeakerFields] = useState([])

  const onChange = (e, id) => {
    // mui adds a weird option string behind my id names...
    const fieldToUpdate = e.target.id.substring(0, e.target.id.indexOf("-"))
    setForm({
      ...form,
      [fieldToUpdate]: id,
    })
  }

  const handleFieldAdd = () => {
    setNumberSpeakerFields([...numSpeakerFields, { field: "" }])
  }

  const handleFieldRemove = (index) => {
    const list = [...numSpeakerFields]
    list.splice(index, 1)
    setNumberSpeakerFields(list)
  }

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
  }, [numSpeakerFields])

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
          <Stack
            spacing={2}
            marginTop={2}
            marginBottom={5}
            width='400px'
            component='form'
          >
            <Autocomplete
              id='ConductingLeaderId'
              options={members}
              getOptionLabel={(members) => `${members.fullName}`}
              onChange={(event, member) => {
                // send id from here to update form
                onChange(event, member.memberId)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Conducting Leader' />
              )}
            />
            <Autocomplete
              id='OpeningPrayerId'
              options={members}
              getOptionLabel={(members) => `${members.fullName}`}
              onChange={(event, member) => {
                onChange(event, member.memberId)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Opening Prayer' />
              )}
            />
            <Autocomplete
              id='SacramentPrayerId'
              options={members}
              getOptionLabel={(members) => `${members.fullName}`}
              onChange={(event, member) => {
                onChange(event, member.memberId)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Sacrament Prayer' />
              )}
            />
            <Autocomplete
              id='ClosingPrayerId'
              options={members}
              getOptionLabel={(members) => `${members.fullName}`}
              onChange={(event, member) => {
                onChange(event, member.memberId)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Closing Prayer' />
              )}
            />
            <Autocomplete
              id='OpeningHymnId'
              options={hymns}
              getOptionLabel={(hymns) => `${hymns.hymnTitle}`}
              onChange={(event, hymn) => {
                onChange(event, hymn.hymnNumber)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Opening Hymn' />
              )}
            />
            <Autocomplete
              id='SacramentHymnId'
              options={hymns}
              getOptionLabel={(hymns) => `${hymns.hymnTitle}`}
              onChange={(event, hymn) => {
                onChange(event, hymn.hymnNumber)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Sacrament Hymn' />
              )}
            />
            <Autocomplete
              id='IntermediateHymnId'
              options={hymns}
              getOptionLabel={(hymns) => `${hymns.hymnTitle}`}
              onChange={(event, hymn) => {
                onChange(event, hymn.hymnNumber)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Intermediate Hymn' />
              )}
            />
            <Autocomplete
              id='ClosingHymnId'
              options={hymns}
              getOptionLabel={(hymns) => `${hymns.hymnTitle}`}
              onChange={(event, hymn) => {
                onChange(event, hymn.hymnNumber)
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label='Closing Hymn' />
              )}
            />

            {/* rerender screen with speaker fields equal to size of numSpeakerFields arrays */}
            <Button variant='outlined' onClick={handleFieldAdd}>
              Add Speaker
            </Button>

            {numSpeakerFields.map((speaker, index) => {
              return (
                <Box
                  fullWidth
                  sx={{ p: 2, border: "1px solid black", borderRadius: "5px" }}
                >
                  <TextField fullWidth label='Topic' sx={{ mb: 2 }} />
                  <Autocomplete
                    id='ConductingLeaderId'
                    options={members}
                    getOptionLabel={(members) => `${members.fullName}`}
                    onChange={(event, member) => {
                      // send id from here to update form
                      onChange(event, member.memberId)
                    }}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label='Speaker' />
                    )}
                  />
                  <Button
                    fullWidth
                    sx={{ mt: 2 }}
                    color='error'
                    onClick={() => handleFieldRemove(index)}
                  >
                    Remove
                  </Button>
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default AddSacramentPlanForm
