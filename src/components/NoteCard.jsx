/* eslint-disable react/prop-types */
import { DeleteOutlined } from "@mui/icons-material"
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material"

const NoteCard = ({ note, handleDelete }) => {
  return (
    <>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default NoteCard
