import { AppBar, Toolbar, Button, Box, Container, Typography, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";

const menuItems = [
  { key: "home", label: "Home" },
  { key: "risk", label: "My Risk" },
  { key: "learn", label: "AI Models" },
  { key: "about", label: "About" },
  { key: "providers", label: "For Providers" },
];

export default function Navbar({ active, onSelect, user, onLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ background: "#FFFFFF", borderBottom: "1px solid #E0E0E0", color: "#333" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LOGO */}
          <Box onClick={() => onSelect("home")} sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1 }}>
            <MonitorHeartIcon sx={{ color: "#007AFF", fontSize: 32 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: "-0.5px", color: "#1d1d1f" }}>
              E-predict
            </Typography>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.key}
                onClick={() => onSelect(item.key)}
                disableRipple
                sx={{
                  color: active === item.key ? "#007AFF" : "#555",
                  fontWeight: active === item.key ? 700 : 500,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "rgba(0, 122, 255, 0.04)", color: "#007AFF" },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* PREDICTION TOOL BUTTON */}
            <Button
              onClick={() => onSelect("tool")}
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: "#007AFF",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "50px",
                padding: "6px 24px",
                boxShadow: "0 4px 12px rgba(0, 122, 255, 0.2)",
                "&:hover": { backgroundColor: "#005ec4" }
              }}
            >
              Prediction Tool
            </Button>

            {/* USER PROFILE / LOGOUT */}
            {user ? (
                <Box sx={{ ml: 2 }}>
                    <IconButton onClick={handleMenuClick} sx={{ p: 0 }}>
                        <Avatar sx={{ bgcolor: "#0D2A3F", width: 36, height: 36, fontSize: 16 }}>
                            {user.username.charAt(0).toUpperCase()}
                        </Avatar>
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} onClick={handleMenuClose}>
                        <MenuItem disabled><Typography variant="caption">Signed in as {user.username}</Typography></MenuItem>
                        <MenuItem onClick={onLogout} sx={{ color: "error.main" }}>
                            <LogoutIcon fontSize="small" sx={{ mr: 1 }} /> Logout
                        </MenuItem>
                    </Menu>
                </Box>
            ) : (
                <Button onClick={() => onSelect("login")} sx={{ ml: 1, textTransform: "none" }}>
                    Login
                </Button>
            )}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}