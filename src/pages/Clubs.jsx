import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const Clubs = () => {
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [clubLocation, setClubLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Club Name:", clubName);
    console.log("Club Description:", clubDescription);
    console.log("Club Location:", clubLocation);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Create and Join Car Clubs</Typography>
      <Typography variant="body1">Join existing car clubs or create your own to connect with like-minded enthusiasts.</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Club Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
        />
        <TextField
          label="Club Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={clubDescription}
          onChange={(e) => setClubDescription(e.target.value)}
        />
        <TextField
          label="Club Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={clubLocation}
          onChange={(e) => setClubLocation(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Create Club</Button>
      </Box>
    </Container>
  );
};

export default Clubs;