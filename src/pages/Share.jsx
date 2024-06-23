import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const Share = () => {
  const [pictureTitle, setPictureTitle] = useState("");
  const [pictureFile, setPictureFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Picture Title:", pictureTitle);
    console.log("Picture File:", pictureFile);
  };

  const handleFileChange = (e) => {
    setPictureFile(e.target.files[0]);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Share Pictures and Engage</Typography>
      <Typography variant="body1">Share your car pictures and engage with other users.</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Picture Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={pictureTitle}
          onChange={(e) => setPictureTitle(e.target.value)}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ mt: 2 }}
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Share Picture</Button>
      </Box>
    </Container>
  );
};

export default Share;