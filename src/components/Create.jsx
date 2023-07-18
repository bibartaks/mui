import "@fontsource/roboto/500.css"
import { Typography, Button, Container } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const Create = () => {
  return (
    <Container>
      <Typography
        sx={{
          marginBottom: 2,
        }}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
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
