import { Box, Container, Typography, Grid, Card, CardContent, Chip, Divider, Paper, Button, Avatar } from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import VerifiedIcon from '@mui/icons-material/Verified';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';

// --- DATA FROM THESIS CHAPTER 3 & 4 ---
const educationData = [
  {
    id: "breast",
    title: "Breast Cancer",
    subtitle: "Morphological Feature Analysis",
    source: "Wisconsin Diagnostic Dataset (FNA)",
    description: "Our AI model analyzes 30 distinct morphological features derived from Fine-Needle Aspirate (FNA) digitized images. Unlike simple visual inspections, the Deep Neural Network (DNN) calculates complex geometric properties of cell nuclei to differentiate between malignant and benign masses[cite: 504, 505, 506].",
    features: [
      "Tumor Radius, Perimeter & Area",
      "Texture (Standard Deviation of Gray-Scale)",
      "Smoothness (Local Variation in Radius Lengths)",
      "Concavity & Concave Points",
      "Symmetry & Fractal Dimension"
    ],
    model: "Deep Neural Network (DNN)",
    performance: "98.3%",
    metric: "Test Accuracy",
    color: "#E91E63"
  },
  {
    id: "lung",
    title: "Lung Cancer",
    subtitle: "Symptomatic Risk Assessment",
    source: "Clinical Survey Data",
    description: "Lung cancer is often detected late due to non-specific symptoms. This module uses an AdaBoost ensemble model to analyze lifestyle factors and early warning signs. [cite_start]It is designed to flag high-risk individuals who may require Low-Dose CT screening[cite: 525, 526].",
    features: [
      "Tobacco Smoking History (Active/Passive)",
      "Chronic Respiratory Symptoms (Wheezing, Coughing)",
      "Environmental Exposures (Asbestos, Radon)",
      "General Health Indicators (Fatigue, Weight Loss)",
      "History of Chronic Diseases"
    ],
    model: "AdaBoost Classifier",
    performance: "96.3%",
    metric: "Sensitivity (Recall)",
    color: "#2196F3"
  },
  {
    id: "thyroid",
    title: "Thyroid Cancer",
    subtitle: "Endocrine Profile Analysis",
    source: "Clinical & Laboratory Data",
    description: "Thyroid malignancy prediction relies on a combination of physiological markers and physical exam findings. [cite_start]Our XGBoost model evaluates hormonal imbalances and structural abnormalities to distinguish cancer from benign thyroid conditions like goiter[cite: 548, 549].",
    features: [
      "Hormone Levels (T3, T4, TSH)",
      "Physical Exam Findings (Goiter Presence)",
      "Patient Demographics (Age, Gender)",
      "History of Radiation Exposure",
      "Psychological Symptoms (Anxiety, Mood Changes)"
    ],
    model: "XGBoost Ensemble",
    performance: "99.5%",
    metric: "Test Accuracy",
    color: "#9C27B0"
  },
  {
    id: "melanoma",
    title: "Melanoma",
    subtitle: "Dermoscopic Image AI",
    source: "ISIC Archive Imaging",
    description: "Using Computer Vision, this module processes high-resolution dermoscopic images. [cite_start]The EfficientNetB0 Convolutional Neural Network (CNN) scans for pixel-level patterns invisible to the naked eye, analyzing the 'ABCDE' criteria of skin lesions automatically[cite: 573, 574].",
    features: [
      "Asymmetry of Lesion",
      "Border Irregularity Analysis",
      "Color Variegation (Pigment Networks)",
      "Dermatoscopic Structures (Dots, Globules)",
      "Texture & Surface Assessment"
    ],
    model: "EfficientNetB0 (CNN)",
    performance: "98.1%",
    metric: "Recall (Safety Score)",
    color: "#FF9800"
  }
];

export default function CancerEducation() {
  return (
    <Box sx={{ bgcolor: "#F4F6F8", minHeight: "100vh", pb: 10 }}>
      
      {/* --- UPGRADED COVER SECTION --- */}
      <Box 
        sx={{ 
          position: "relative",
          bgcolor: "#0D2A3F", 
          // Background: Abstract Tech/Data Image
          backgroundImage: 'url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 12, 
          textAlign: "center",
          color: "white",
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(10, 25, 41, 0.85)', // Deep Navy Overlay
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
            <Chip 
                label="THESIS METHODOLOGY" 
                sx={{ 
                    bgcolor: "rgba(255,255,255,0.1)", 
                    color: "#4FC3F7", 
                    fontWeight: 700, 
                    mb: 2, 
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)"
                }} 
            />
            <Typography variant="h2" fontWeight={800} sx={{ mb: 3, letterSpacing: "-1px" }}>
                How the AI Models Work
            </Typography>
            <Typography variant="h6" sx={{ color: "#B0BEC5", lineHeight: 1.6, maxWidth: 800, mx: "auto", fontWeight: 400 }}>
                E-predict utilizes a multi-modal approach, combining structured clinical data, symptomatic surveys, and computer vision. Below are the specific datasets, features, and performance metrics used to train our algorithms.
            </Typography>
        </Container>
      </Box>

      {/* --- CONTENT SECTIONS --- */}
      <Container maxWidth="lg" sx={{ mt: -6, position: "relative", zIndex: 3 }}>
        <Grid container spacing={4}>
            {educationData.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <Paper 
                        elevation={2} 
                        sx={{ 
                            borderRadius: 4, 
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, Side-by-side on desktop
                            transition: "0.3s",
                            "&:hover": { transform: "translateY(-4px)", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }
                        }}
                    >
                        
                        {/* LEFT SIDE: Visual & Stats */}
                        <Box 
                            sx={{ 
                                width: { xs: "100%", md: 320 }, 
                                bgcolor: `${item.color}0A`, // Very light tint of the cancer color
                                p: 4, 
                                display: "flex", 
                                flexDirection: "column", 
                                justifyContent: "center",
                                borderRight: { md: `1px solid ${item.color}20` },
                                borderBottom: { xs: `1px solid ${item.color}20`, md: "none" }
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <Chip 
                                    icon={<StorageIcon sx={{ fontSize: 16 }} />}
                                    label={item.source} 
                                    size="small" 
                                    sx={{ bgcolor: "white", fontWeight: 600, mb: 2, border: "1px solid #E0E0E0" }} 
                                />
                                <Typography variant="h4" fontWeight={800} color={item.color}>
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={600} color="text.secondary" sx={{ opacity: 0.8 }}>
                                    {item.subtitle}
                                </Typography>
                            </Box>

                            {/* KPI Card */}
                            <Card elevation={0} sx={{ border: `1px solid ${item.color}40`, borderRadius: 3, bgcolor: "white" }}>
                                <CardContent sx={{ textAlign: "center", py: 3 }}>
                                    <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ letterSpacing: 1, display: "block", mb: 1 }}>
                                        {item.metric.toUpperCase()}
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                                        <SpeedIcon sx={{ color: item.color, fontSize: 32 }} />
                                        <Typography variant="h3" fontWeight={800} color="#0D2A3F">
                                            {item.performance}
                                        </Typography>
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="caption" sx={{ bgcolor: "#F5F7FA", px: 1, py: 0.5, borderRadius: 1 }}>
                                        Model: {item.model}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* RIGHT SIDE: Detailed Text */}
                        <Box sx={{ p: { xs: 3, md: 5 }, flex: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                                <Avatar sx={{ bgcolor: item.color, width: 32, height: 32 }}>
                                    <ScienceIcon sx={{ fontSize: 18 }} />
                                </Avatar>
                                <Typography variant="h6" fontWeight={700} color="#0D2A3F">
                                    Diagnostic Approach
                                </Typography>
                            </Box>
                            
                            <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "1rem", mb: 4 }}>
                                {item.description}
                            </Typography>

                            <Divider sx={{ mb: 3 }} />

                            <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ letterSpacing: 1, color: "#0D2A3F", mb: 2 }}>
                                KEY FEATURES ANALYZED
                            </Typography>
                            
                            <Grid container spacing={2}>
                                {item.features.map((feature) => (
                                    <Grid item xs={12} sm={6} key={feature}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                            <CheckCircleOutlineIcon sx={{ fontSize: 20, color: item.color }} />
                                            <Typography variant="body2" fontWeight={500} color="text.primary">
                                                {feature}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                    </Paper>
                </Grid>
            ))}
        </Grid>

        {/* NLP / BioBERT Highlight Section (Dark Mode Contrast) */}
        <Paper 
            elevation={4} 
            sx={{ 
                mt: 8, 
                p: { xs: 4, md: 6 }, 
                borderRadius: 4, 
                background: "linear-gradient(135deg, #0D2A3F 0%, #1A4D75 100%)", 
                color: "white",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Background Pattern Decoration */}
            <Box sx={{ position: "absolute", top: -50, right: -50, opacity: 0.1 }}>
                <BiotechIcon sx={{ fontSize: 300 }} />
            </Box>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={8}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <BiotechIcon sx={{ fontSize: 32, color: "#4FC3F7" }} />
                        <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 700, color: "#4FC3F7" }}>
                            ADVANCED RESEARCH
                        </Typography>
                    </Box>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Beyond Structured Data: Clinical Text Analysis
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, mb: 3, fontSize: "1.1rem", maxWidth: 800 }}>
                        Our research also pioneered the use of Natural Language Processing (NLP) to detect cancer risks from unstructured clinical notes. 
                        [cite_start]Using <strong>BioBERT</strong> embeddings, the system achieved <strong>95.8% Accuracy</strong> in identifying diagnostic cues hidden in free-text medical narratives[cite: 1615, 1616].
                    </Typography>
                    <Button 
                        variant="outlined" 
                        sx={{ 
                            color: "white", 
                            borderColor: "rgba(255,255,255,0.5)", 
                            borderRadius: 20,
                            px: 4,
                            py: 1,
                            textTransform: "none",
                            fontSize: "1rem",
                            "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" }
                        }}
                    >
                        Read Methodology in Thesis (Chapter 4.7)
                    </Button>
                </Grid>
            </Grid>
        </Paper>

      </Container>
    </Box>
  );
}