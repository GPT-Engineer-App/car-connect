import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const Events = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Event Name:", eventName);
    console.log("Event Date:", eventDate);
    console.log("Event Location:", eventLocation);
    console.log("Event Description:", eventDescription);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Organize and Join Events</Typography>
      <Typography variant="body1">Discover and participate in car events happening around you.</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Event Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <TextField
          label="Event Date"
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <TextField
          label="Event Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
        <TextField
          label="Event Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Create Event</Button>
      </Box>
    </Container>
  );
};

export default Events;