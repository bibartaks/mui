import Create from "./components/Create"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Create />
      </>
    </ThemeProvider>
  )
}

export default App
