import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
  Paper,
  Chip,
  Divider,
  Avatar
} from "@mui/material";

// Icons
import FemaleIcon from '@mui/icons-material/Female';
import AirIcon from '@mui/icons-material/Air';
import BiotechIcon from '@mui/icons-material/Biotech';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScienceIcon from '@mui/icons-material/Science';

import NumericCancerForm from "../components/NumericCancerForm";
import MelanomaForm from "../components/MelanomaForm";

// Data
import breastFields from "../data/breastFields";
import lungFields from "../data/lungFields";
import thyroidFields from "../data/thyroidFields";

const cancerConfigs = [
  {
    id: "breast",
    title: "Breast Cancer",
    subtitle: "Tissue Analysis",
    icon: <FemaleIcon />,
    color: "#E91E63",
    bgcolor: "#FCE4EC", // Light pink background for icon
    apiUrl: "/api/predict/breast",
    fields: breastFields,
  },
  {
    id: "lung",
    title: "Lung Cancer",
    subtitle: "Symptom Check",
    icon: <AirIcon />,
    color: "#2196F3",
    bgcolor: "#E3F2FD",
    apiUrl: "/api/predict/lung",
    fields: lungFields,
  },
  {
    id: "thyroid",
    title: "Thyroid Cancer",
    subtitle: "Clinical Stage",
    icon: <BiotechIcon />,
    color: "#9C27B0",
    bgcolor: "#F3E5F5",
    apiUrl: "/api/predict/thyroid",
    fields: thyroidFields,
  },
  {
    id: "melanoma",
    title: "Melanoma",
    subtitle: "Dermoscopy AI",
    icon: <WbSunnyIcon />,
    color: "#FF9800",
    bgcolor: "#FFF3E0",
    apiUrl: "/api/predict/melanoma",
    fields: null,
  },
];

export default function PredictionPage() {
  const [activeId, setActiveId] = useState("breast");
  const active = cancerConfigs.find((c) => c.id === activeId);

  return (
    // MAIN CONTAINER: Flex row to split screen perfectly
    <Box sx={{ display: "flex", minHeight: "calc(100vh - 64px)", bgcolor: "#F8F9FA" }}>
      
      {/* ---------------- LEFT SIDEBAR (Fixed Width) ---------------- */}
      <Box 
        sx={{ 
          width: { xs: 80, md: 320 }, // Collapses on small screens, wide on desktop
          flexShrink: 0,
          bgcolor: "#FFFFFF", 
          borderRight: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Sidebar Header */}
        <Box sx={{ p: 3, borderBottom: "1px solid #F0F0F0" }}>
            <Typography 
                variant="overline" 
                fontWeight={700} 
                color="text.secondary" 
                sx={{ letterSpacing: 1.2, display: { xs: "none", md: "block" } }}
            >
                SELECT MODEL
            </Typography>
             {/* Mobile Icon (visible only on small screens) */}
            <ScienceIcon sx={{ display: { xs: "block", md: "none" }, mx: "auto", color: "text.secondary" }} />
        </Box>

        {/* List of Models */}
        <List sx={{ p: 2 }}>
            {cancerConfigs.map((c) => {
                const isActive = c.id === activeId;
                return (
                <ListItemButton
                    key={c.id}
                    selected={isActive}
                    onClick={() => setActiveId(c.id)}
                    sx={{
                        borderRadius: 3,
                        mb: 1,
                        py: 1.5,
                        transition: "all 0.2s ease",
                        bgcolor: isActive ? "#F5F7FA" : "transparent",
                        borderLeft: isActive ? `4px solid ${c.color}` : "4px solid transparent",
                        "&:hover": { bgcolor: "#FAFAFA", transform: "translateX(4px)" },
                        "&.Mui-selected": { bgcolor: "#F5F7FA" }
                    }}
                >
                    {/* Colored Icon Box */}
                    <Avatar 
                        variant="rounded" 
                        sx={{ 
                            bgcolor: isActive ? c.color : c.bgcolor, 
                            color: isActive ? "#FFF" : c.color,
                            mr: 2,
                            width: 40,
                            height: 40
                        }}
                    >
                        {c.icon}
                    </Avatar>

                    {/* Text (Hidden on mobile) */}
                    <ListItemText
                        primary={c.title}
                        secondary={c.subtitle}
                        sx={{ display: { xs: "none", md: "block" } }}
                        primaryTypographyProps={{ 
                            fontWeight: isActive ? 700 : 600, 
                            color: isActive ? "#0D2A3F" : "#555" 
                        }}
                        secondaryTypographyProps={{ fontSize: "0.8rem" }}
                    />
                    
                    {/* Active Arrow */}
                    {isActive && <ChevronRightIcon sx={{ color: c.color, display: { xs: "none", md: "block" } }} />}
                </ListItemButton>
                );
            })}
        </List>

        {/* Bottom Status (Sidebar Footer) */}
        <Box sx={{ mt: "auto", p: 3, display: { xs: "none", md: "block" } }}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "#F0F7FF", border: "1px solid #BBDEFB", borderRadius: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <VerifiedUserIcon color="primary" fontSize="small" />
                    <Typography variant="caption" fontWeight={700} color="primary">
                        HIPAA Compliant UI
                    </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2, display: "block" }}>
                    Data processed locally for demonstration.
                </Typography>
            </Paper>
        </Box>
      </Box>


      {/* ---------------- RIGHT CONTENT AREA (Scrollable) ---------------- */}
      <Box 
        sx={{ 
            flexGrow: 1, 
            p: { xs: 2, md: 5 }, 
            overflowY: "auto", 
            height: "calc(100vh - 64px)" 
        }}
      >
        <Container maxWidth="lg">
            
            {/* Header for Right Side */}
            <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Typography variant="h4" fontWeight={800} color="#1A2027">
                        {active.title} Analysis
                    </Typography>
                    <Typography color="text.secondary">
                        Enter clinical parameters below to generate a risk assessment.
                    </Typography>
                </Box>
                <Chip label="AI Model v1.0" variant="outlined" size="small" />
            </Box>

            {/* The Form */}
            <Box sx={{ animation: "fadeIn 0.4s ease-out" }}>
                {active.id !== "melanoma" ? (
                    <NumericCancerForm
                        title={active.title}
                        apiUrl={active.apiUrl}
                        fields={active.fields}
                        color={active.color}
                    />
                ) : (
                    <MelanomaForm />
                )}
            </Box>
            
        </Container>
      </Box>

    </Box>
  );
}