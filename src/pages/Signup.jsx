import { useState } from "react";
import { Box, TextField, Button, Typography, Link, Container, Paper, Avatar, Grid } from "@mui/material";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function Signup({ onNavigate }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
    onNavigate("login"); // Redirect to login after signup
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      bgcolor: "#F0F2F5",
      backgroundImage: 'url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80)',
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay'
    }}>
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4, backdropFilter: "blur(10px)", bgcolor: "rgba(255,255,255,0.95)" }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
                <Avatar sx={{ m: "auto", bgcolor: "#2E7D32", width: 56, height: 56, mb: 2 }}>
                    <PersonAddOutlinedIcon fontSize="large" />
                </Avatar>
                <Typography variant="h4" fontWeight={800} color="#0D2A3F">
                    Create Account
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Join the E-predict research network
                </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth label="First Name" name="firstName"
                            onChange={handleChange} variant="outlined" sx={{ bgcolor: "white" }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth label="Last Name" name="lastName"
                            onChange={handleChange} variant="outlined" sx={{ bgcolor: "white" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth label="Institutional Email" name="email" type="email"
                            onChange={handleChange} variant="outlined" sx={{ bgcolor: "white" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth label="Password" name="password" type="password"
                            onChange={handleChange} variant="outlined" sx={{ bgcolor: "white" }}
                        />
                    </Grid>
                </Grid>
                
                <Button 
                    type="submit" 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    sx={{ 
                        mt: 4, mb: 2, py: 1.5, 
                        borderRadius: 2, fontSize: "1rem", fontWeight: 700,
                        bgcolor: "#2E7D32", "&:hover": { bgcolor: "#1B5E20" }
                    }}
                >
                    Register
                </Button>
            </form>
            
            <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Already a member?{' '}
                    <Link 
                        component="button" 
                        onClick={() => onNavigate("login")} 
                        underline="hover" 
                        fontWeight={700} 
                        color="primary"
                    >
                        Sign In
                    </Link>
                </Typography>
            </Box>
        </Paper>
      </Container>
    </Box>
  );
}