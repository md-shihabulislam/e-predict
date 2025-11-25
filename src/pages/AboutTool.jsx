import { Box, Container, Typography, Grid, Paper, Avatar, Chip, Divider, Button, Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import DnsIcon from '@mui/icons-material/Dns';

export default function AboutTool() {
  return (
    <Box sx={{ bgcolor: "#F8F9FA", minHeight: "100vh", pb: 10 }}>
      
      {/* --- HERO HEADER --- */}
      <Box 
        sx={{ 
          background: "linear-gradient(135deg, #0D2A3F 0%, #203A43 50%, #2C5364 100%)",
          color: "white", 
          pt: 12,
          pb: 16, 
          textAlign: "center",
          position: "relative",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" 
        }}
      >
        <Container maxWidth="md">
            <Chip 
                icon={<SchoolIcon sx={{ color: "#4FC3F7 !important" }} />} 
                label="MASTER'S THESIS PROJECT • 2026" 
                sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "#4FC3F7", fontWeight: 700, mb: 3, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }} 
            />
            <Typography variant="h2" fontWeight={800} gutterBottom sx={{ letterSpacing: "-1px", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                Multi-Cancer Prediction Using Machine Learning
            </Typography>
            <Typography variant="h6" sx={{ color: "#B0BEC5", lineHeight: 1.6, fontWeight: 400, maxWidth: 800, mx: "auto", mb: 4 }}>
                An integrated artificial intelligence framework designed to assist clinicians in the early detection of Breast, Lung, Thyroid, and Melanoma cancers.
            </Typography>
            
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" size="large" sx={{ borderRadius: 50, px: 4, py: 1.5, fontWeight: 700 }}>
                    View Architecture
                </Button>
                <Button variant="outlined" size="large" startIcon={<DownloadIcon />} sx={{ borderRadius: 50, px: 4, color: "white", borderColor: "white", "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" } }}>
                    Download Abstract
                </Button>
            </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -10 }}>
        
        {/* --- RESEARCHER PROFILE CARD --- */}
        <Paper 
            elevation={4} 
            sx={{ 
                p: 4, 
                borderRadius: 4, 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                alignItems: "center", 
                gap: 4,
                mb: 6,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)"
            }}
        >
            <Avatar sx={{ width: 120, height: 120, bgcolor: "#E3F2FD", color: "#007AFF", boxShadow: "0 8px 24px rgba(0,122,255,0.2)" }}>
                <AccountCircleIcon sx={{ fontSize: 80 }} />
            </Avatar>
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="overline" color="primary" fontWeight={700}>RESEARCH STUDENT</Typography>
                <Typography variant="h4" fontWeight={800} color="#0D2A3F" gutterBottom>
                    Islam Md Shihabul
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    Master of Web System Development <br />
                    <strong>The Kyoto College of Graduate Studies for Informatics</strong>
                </Typography>
                
                <Stack direction={{ xs: "column", sm: "row" }} spacing={4} sx={{ mt: 3, borderTop: "1px solid #EEE", pt: 2 }}>
                    <Box>
                        <Typography variant="caption" fontWeight={700} color="text.secondary">STUDENT ID</Typography>
                        <Typography variant="body2" fontWeight={600}>M24W7524</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" fontWeight={700} color="text.secondary">SUPERVISORS</Typography>
                        <Typography variant="body2" fontWeight={600}>Dr. Sameera Abar </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" fontWeight={700} color="text.secondary">SUBMISSION</Typography>
                        <Typography variant="body2" fontWeight={600}>April , 2026</Typography>
                    </Box>
                </Stack>
            </Box>
        </Paper>

        <Grid container spacing={4}>
            
            {/* --- LEFT: ABSTRACT & ARCHITECTURE --- */}
            <Grid item xs={12} md={8}>
                
                {/* ABSTRACT */}
                <Paper elevation={0} sx={{ p: 5, borderRadius: 4, border: "1px solid #E0E0E0", mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                        <DescriptionIcon color="primary" sx={{ fontSize: 32 }} />
                        <Typography variant="h5" fontWeight={800} color="#0D2A3F">
                            Project Abstract
                        </Typography>
                    </Box>
                    <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
                        This study introduces an integrated artificial intelligence framework for the early prediction of four major cancers <strong>breast, lung, thyroid, and melanoma </strong>using machine learning (ML), deep learning (DL), and natural language processing (NLP). Publicly available, de-identified datasets containing clinical, laboratory, symptom, dermoscopic image, and textual data were systematically preprocessed through cleaning, encoding, normalization, and augmentation to ensure robustness and readiness for modeling. For structured data, models including Logistic Regression, Support Vector Machines, Random Forest, AdaBoost, XGBoost, and Deep Neural Networks were developed and evaluated, while melanoma lesion images were classified using a convolutional architecture based on EfficientNet. Clinical text was processed with traditional vectorization methods and contextual BioBERT embeddings to capture subtle diagnostic signals. Across different cancer types, the best models demonstrated strong performance: a Deep Neural Network for <strong>breast cancer (98.3% accuracy, AUC 0.997), AdaBoost for lung cancer (91.9% accuracy, 96.3% recall), XGBoost for thyroid cancer (99.5% accuracy), EfficientNetB0 for melanoma (81.2% accuracy), and a BioBERT-based classifier for multi-cancer clinical text (95.8% accuracy, 95.4% precision, 96.1% recall).</strong> Evaluation metrics such as accuracy, precision, recall, F1-score, and AUC confirmed high sensitivity, with a focus on reducing missed diagnoses. The top-performing models were integrated into a modular web-based decision support system featuring a React frontend and Flask backend, enabling real-time, user-friendly risk assessment without storing personally identifiable information, in compliance with HIPAA and GDPR standards. These findings demonstrate the potential of a unified, privacy-aware multi-cancer prediction system to aid clinicians with early detection and triage, while underscoring the importance of prospective clinical validation, improved explainability, and expansion to larger, more diverse real-world datasets.
                    </Typography>
                </Paper>

                {/* DETAILED SYSTEM ARCHITECTURE (Thesis Chapter 4.8.4) */}
                <Paper elevation={0} sx={{ p: 5, borderRadius: 4, border: "1px solid #E0E0E0" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                        <LayersIcon color="secondary" sx={{ fontSize: 32 }} />
                        <Typography variant="h5" fontWeight={800} color="#0D2A3F">
                            System Architecture (4-Layer Model)
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        
                        {/* Layer 1: Presentation */}
                        <Paper elevation={0} sx={{ border: "1px solid #C8E6C9", bgcolor: "#E8F5E9", borderRadius: 2 }}>
                            <Accordion elevation={0} sx={{ bgcolor: "transparent" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <WebIcon color="success" />
                                        <Box>
                                            <Typography fontWeight={700} color="success.main">Presentation Layer</Typography>
                                            <Typography variant="caption" color="text.secondary">React.js Frontend • User Interface</Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        Manages user interaction, secure login, and real-time input validation. Displays probability scores and risk visualization.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>

                        {/* Layer 2: Application */}
                        <Paper elevation={0} sx={{ border: "1px solid #BBDEFB", bgcolor: "#E3F2FD", borderRadius: 2 }}>
                            <Accordion elevation={0} sx={{ bgcolor: "transparent" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <DnsIcon color="primary" />
                                        <Box>
                                            <Typography fontWeight={700} color="primary.main">Application Layer</Typography>
                                            <Typography variant="caption" color="text.secondary">Flask API • Backend Server</Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        Orchestrates data flow, executes preprocessing pipelines (normalization, encoding), and routes requests to the correct model.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>

                        {/* Layer 3: Model Service */}
                        <Paper elevation={0} sx={{ border: "1px solid #FFCCBC", bgcolor: "#FBE9E7", borderRadius: 2 }}>
                            <Accordion elevation={0} sx={{ bgcolor: "transparent" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <PsychologyIcon color="error" />
                                        <Box>
                                            <Typography fontWeight={700} color="error.main">Model Service Layer</Typography>
                                            <Typography variant="caption" color="text.secondary">Inference Engine • ML/DL Models</Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        Hosts the trained algorithms: XGBoost (Thyroid), AdaBoost (Lung), DNN (Breast), and EfficientNet CNN (Melanoma).
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>

                        {/* Layer 4: Data Layer */}
                        <Paper elevation={0} sx={{ border: "1px solid #E0E0E0", bgcolor: "#F5F5F5", borderRadius: 2 }}>
                            <Accordion elevation={0} sx={{ bgcolor: "transparent" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <StorageIcon color="action" />
                                        <Box>
                                            <Typography fontWeight={700} color="text.primary">Data & Storage Layer</Typography>
                                            <Typography variant="caption" color="text.secondary">Serialized Models • Configuration</Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        Stores serialized model artifacts (.pkl, .h5), scaler objects, and feature maps. Ensures rapid loading without database latency.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>

                    </Box>
                </Paper>
            </Grid>

            {/* --- RIGHT: TECH STACK & GOALS --- */}
            <Grid item xs={12} md={4}>
                
                {/* TECH STACK */}
                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: "#0D2A3F", color: "white", mb: 4 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <CodeIcon sx={{ color: "#4FC3F7" }} /> Technology Stack
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                        Built using modern, scalable frameworks for clinical deployment.
                    </Typography>
                    
                    <Stack spacing={2}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 1 }}>
                            <Typography variant="body2" fontWeight={600}>Frontend</Typography>
                            <Chip label="React.js + MUI" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "white" }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 1 }}>
                            <Typography variant="body2" fontWeight={600}>Backend</Typography>
                            <Chip label="Flask (Python)" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "white" }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 1 }}>
                            <Typography variant="body2" fontWeight={600}>AI Core</Typography>
                            <Chip label="TensorFlow / Keras" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "white" }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 1 }}>
                            <Typography variant="body2" fontWeight={600}>NLP</Typography>
                            <Chip label="BioBERT" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "white" }} />
                        </Box>
                    </Stack>
                </Paper>

                {/* RESEARCH MOTIVATION */}
                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: "1px solid #E0E0E0" }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom color="#0D2A3F">
                        Research Motivation
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={2}>
                        <Box>
                            <Typography variant="subtitle2" fontWeight={700} color="primary">Early Detection</Typography>
                            <Typography variant="caption" color="text.secondary">Cancer is responsible for 1 in 6 deaths globally. Early diagnosis drastically improves survival rates.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" fontWeight={700} color="primary">Unstructured Data</Typography>
                            <Typography variant="caption" color="text.secondary">Utilizing free-text clinical notes which are often ignored by traditional diagnostic systems.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" fontWeight={700} color="primary">Accessibility</Typography>
                            <Typography variant="caption" color="text.secondary">Providing a low-cost, web-based decision support tool for clinicians in low-resource settings.</Typography>
                        </Box>
                    </Stack>
                </Paper>

            </Grid>

        </Grid>
      </Container>
    </Box>
  );
}