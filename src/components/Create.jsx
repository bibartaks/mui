import "@fontsource/roboto/500.css"
import { Typography, Button, Container } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const Create = () => {
  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom color="gray">
        Create a New Note
      </Typography>

      <Button
        sx={{
          backgroundColor: "violet",
          "&:hover": {
            background: "blue",
          },
        }}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  )
}

export default Create
