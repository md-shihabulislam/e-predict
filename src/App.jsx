import { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, CircularProgress } from "@mui/material";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import PredictionPage from "./pages/PredictionPage";
import AboutTool from "./pages/AboutTool";
import CancerEducation from "./pages/CancerEducation";
import ForProviders from "./pages/ForProviders";
import RiskIntro from "./pages/RiskIntro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Theme
const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  palette: {
    primary: { main: "#007AFF" },
    secondary: { main: "#0D2A3F" },
    background: { default: "#F5F7FA" },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
  },
});

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  // Check for existing session on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("username");
    if (token && storedUser) {
        setUser({ username: storedUser, token });
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setUser(null);
      setCurrentView("login");
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home onNavigate={setCurrentView} />;
      case "tool":
        // FIX APPLIED: Removed the user check (ternary operator). 
        // Now renders PredictionPage directly for everyone.
        return <PredictionPage />;
      case "risk":
        return <RiskIntro onNavigate={setCurrentView} />;
      case "learn":
        return <CancerEducation />;
      case "about":
        return <AboutTool />;
      case "providers":
        return <ForProviders />;
      case "login":
        return <Login onLogin={handleLoginSuccess} onNavigate={setCurrentView} />;
      case "signup":
        return <Signup onNavigate={setCurrentView} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  const handleLoginSuccess = (userData) => {
      setUser(userData);
      setCurrentView("home");
  };

  if (loading) {
      return (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <CircularProgress />
          </Box>
      );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        {/* Pass user state to Navbar */}
        <Navbar active={currentView} onSelect={setCurrentView} user={user} onLogout={handleLogout} />
        
        <Box sx={{ flexGrow: 1 }}>
          {renderView()}
        </Box>

        {/* Footer */}
        <Box sx={{ py: 4, textAlign: "center", bgcolor: "#fff", borderTop: "1px solid #eee", color: "#888", fontSize: "0.85rem" }}>
            E-predict Research Project © 2026 • The Kyoto College of Graduate Studies for Informatics
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;