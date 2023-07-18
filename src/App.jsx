import { purple } from "@mui/material/colors"
import Create from "./components/Create"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
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
      <>
        <Create />
      </>
    </ThemeProvider>
  )
}

export default App
