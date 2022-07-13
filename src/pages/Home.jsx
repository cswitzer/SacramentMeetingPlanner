import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const Home = () => {
  const theme = createTheme()

  // display a list of sacrament meetings delivered from Web API
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='lg'>
        <CssBaseline />
        <div>
          <h1>Home</h1>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default Home
