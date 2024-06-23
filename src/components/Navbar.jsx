import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component={RouterLink} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
        ShiftHappens
      </Typography>
      <Button color="inherit" component={RouterLink} to="/connect">Connect</Button>
      <Button color="inherit" component={RouterLink} to="/events">Events</Button>
      <Button color="inherit" component={RouterLink} to="/clubs">Clubs</Button>
      <Button color="inherit" component={RouterLink} to="/share">Share</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;