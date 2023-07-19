import { purple } from "@mui/material/colors"
import Create from "./pages/Create"
import { createTheme, ThemeProvider } from "@mui/material"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Notes from "./pages/Notes"
import Layout from "./components/Layout"

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
