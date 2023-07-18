import "@fontsource/roboto/500.css"
import { Typography, Button, Container, TextField } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === "") {
      setTitleError(true)
    }

    if (details === "") {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details)
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography
        sx={{
          marginBottom: 2,
        }}
        variant="h5"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={e => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          sx={{
            marginBottom: 3,
          }}
        />
        <TextField
          onChange={e => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
          sx={{
            marginBottom: 3,
          }}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Create
