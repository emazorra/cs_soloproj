import React, { useState } from "react";
import Profile from "./profile.jsx";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import Grid for layout
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import '../loginpage.css';
import ForgotPassword from '../ForgotPassword.js';
import { GoogleIcon } from '../CustomIcons.js';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import logo from '../../docs/assets/images/Social Media Art 2logos.png';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(4),
  margin: 'auto',
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
}));

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (err) {
      console.log("Login failed:", err);
    }
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh', padding: 20 }}>
        
        {/* Logo section */}
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <img src={logo} alt="Left Rising Logo" className="logo" style={{ maxWidth: '80%', height: 'auto' }} />
        </Grid>

        {/* Sign-in form section */}
        <Grid item xs={12} md={6}>
          <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
          <Card variant="outlined">
            <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  fullWidth
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Link component="button" onClick={handleClickOpen} variant="body2">
                    Forgot your password?
                  </Link>
                </Box>
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••"
                  required
                  fullWidth
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <ForgotPassword open={open} handleClose={handleClose} />
              <Button type="submit" fullWidth variant="contained">
                Sign in
              </Button>

              <Typography sx={{ textAlign: 'center' }}>
                Don&apos;t have an account?{' '}
                <Link href="#" variant="body2">
                  Sign up
                </Link>
              </Typography>
            </Box>

            <Divider>or</Divider>

            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
          </Card>
        </Grid>
      </Grid>
      {user && <Profile {...user} />} {/* Render profile if user exists */}
    </AppTheme>
  );
};

export default LoginForm;
