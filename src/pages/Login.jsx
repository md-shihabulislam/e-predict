import { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, Alert, Link, Container, Paper, Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export default function Login({ onLogin, onNavigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // In a real app with backend connected:
    // const res = await api.post('/auth/login', { username, password });
    
    // Simulation for UI Demo:
    if (username === "admin" && password === "password") {
      onLogin({ username: "Dr. Admin", role: "Clinician" }); 
    } else {
      setError("Invalid credentials. Try admin / password");
    }
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      bgcolor: "#F0F2F5",
      backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2187d80a1a44?auto=format&fit=crop&q=80)',
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay'
    }}>
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4, backdropFilter: "blur(10px)", bgcolor: "rgba(255,255,255,0.95)" }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
                <Avatar sx={{ m: "auto", bgcolor: "#007AFF", width: 56, height: 56, mb: 2 }}>
                    <LockOutlinedIcon fontSize="large" />
                </Avatar>
                <Typography variant="h4" fontWeight={800} color="#0D2A3F">
                    Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Secure access for healthcare professionals
                </Typography>
            </Box>

            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Username or Email"
                    variant="outlined"
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ bgcolor: "white" }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ bgcolor: "white" }}
                />
                
                <Button 
                    type="submit" 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    sx={{ 
                        mt: 4, 
                        mb: 2, 
                        py: 1.5, 
                        borderRadius: 2, 
                        fontSize: "1rem", 
                        fontWeight: 700,
                        bgcolor: "#007AFF",
                        "&:hover": { bgcolor: "#005ec4" }
                    }}
                >
                    Sign In to Dashboard
                </Button>
            </form>
            
            <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Don't have an account?{' '}
                    <Link 
                        component="button" 
                        onClick={() => onNavigate("signup")} 
                        underline="hover" 
                        fontWeight={700} 
                        color="primary"
                    >
                        Request Access
                    </Link>
                </Typography>
            </Box>
        </Paper>
      </Container>
    </Box>
  );
}