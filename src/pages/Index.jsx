import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h1" gutterBottom>Welcome to ShiftHappens</Typography>
      <Typography variant="body1" paragraph>Connect with car enthusiasts, join events, create and join car clubs, and share your passion for cars.</Typography>
      <Button variant="contained" color="primary" component={Link} to="/connect">Get Started</Button>
    </Container>
  );
};

export default Index;