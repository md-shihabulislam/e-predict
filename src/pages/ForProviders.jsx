import { Box, Container, Typography, Paper, Grid, Alert, Accordion, AccordionSummary, AccordionDetails, Chip, Stack, Divider, Avatar } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';
import LayersIcon from '@mui/icons-material/Layers';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';

export default function ForProviders() {
  return (
    <Box sx={{ bgcolor: "#F8F9FA", minHeight: "100vh", pb: 10 }}>
      
      {/* --- HERO HEADER --- */}
      <Box 
        sx={{ 
          bgcolor: "#0D2A3F", 
          color: "white", 
          pt: 10, 
          pb: 14, 
          position: "relative",
          backgroundImage: 'url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80)', // Tech/Medical background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(13, 42, 63, 0.9)', // Dark overlay
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <Chip label="TECHNICAL DOCUMENTATION" sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#4FC3F7", fontWeight: 700, backdropFilter: "blur(5px)" }} />
                <Chip label="v1.0.0" size="small" sx={{ bgcolor: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.3)" }} />
            </Stack>
            <Typography variant="h2" fontWeight={800} sx={{ letterSpacing: "-1px", mb: 2 }}>
                Clinical Integration Guide
            </Typography>
            <Typography variant="h6" sx={{ color: "#B0BEC5", maxWidth: 800, fontWeight: 400, lineHeight: 1.6 }}>
                Comprehensive technical specifications, deployment architecture, and performance benchmarks for the E-predict multi-cancer decision support system.
            </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -8, position: "relative", zIndex: 3 }}>
        
        {/* ALERT BANNER */}
        <Alert 
            severity="info" 
            icon={<DescriptionIcon fontSize="inherit" />}
            sx={{ 
                mb: 4, 
                borderRadius: 3, 
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)", 
                bgcolor: "white", 
                border: "1px solid #E0E0E0" 
            }}
        >
            <Typography variant="body2" fontWeight={500}>
                <strong>Research Prototype Notice:</strong> This system is developed for academic research and educational demonstration. It has not yet received FDA/EMA clearance for primary diagnostic use in clinical settings.
            </Typography>
        </Alert>

        <Grid container spacing={4}>
            
            {/* LEFT COLUMN: ARCHITECTURE & LIMITATIONS */}
            <Grid item xs={12} md={8}>
                
                {/* SYSTEM ARCHITECTURE (4-LAYER MODEL) */}
                <Paper elevation={0} sx={{ p: 5, borderRadius: 4, mb: 4, border: "1px solid #E0E0E0", bgcolor: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                        <LayersIcon color="primary" sx={{ fontSize: 32 }} />
                        <Box>
                            <Typography variant="h5" fontWeight={800} color="#0D2A3F">
                                System Architecture
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Based on Microservices Principles (Thesis Chapter 4.8)
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Stack spacing={3}>
                        {/* Layer 1 */}
                        <Box sx={{ display: "flex", gap: 3, p: 2, border: "1px solid #E0E0E0", borderRadius: 3, transition: "0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "#F5F9FF" } }}>
                            <Avatar sx={{ bgcolor: "#E3F2FD", color: "#1976D2" }}><WebIcon /></Avatar>
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700} color="#0D2A3F">1. Presentation Layer (Frontend)</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    Built with <strong>React.js</strong> and Material UI. Handles user authentication, input validation, and responsive data visualization. Communicates via secure HTTPS.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Layer 2 */}
                        <Box sx={{ display: "flex", gap: 3, p: 2, border: "1px solid #E0E0E0", borderRadius: 3, transition: "0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "#F5F9FF" } }}>
                            <Avatar sx={{ bgcolor: "#E8F5E9", color: "#2E7D32" }}><DnsIcon /></Avatar>
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700} color="#0D2A3F">2. Application Layer (Backend)</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    Powered by <strong>Flask (Python)</strong>. Acts as the API gateway, managing routing, request parsing, and orchestrating the data preprocessing pipeline.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Layer 3 */}
                        <Box sx={{ display: "flex", gap: 3, p: 2, border: "1px solid #E0E0E0", borderRadius: 3, transition: "0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "#F5F9FF" } }}>
                            <Avatar sx={{ bgcolor: "#FFF3E0", color: "#EF6C00" }}><PsychologyIcon /></Avatar>
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700} color="#0D2A3F">3. Model Service Layer (AI Engine)</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    The core inference engine. Loads serialized models (<strong>.pkl, .h5</strong>) into memory for low-latency prediction. Includes XGBoost, AdaBoost, and TensorFlow CNNs.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Layer 4 */}
                        <Box sx={{ display: "flex", gap: 3, p: 2, border: "1px solid #E0E0E0", borderRadius: 3, transition: "0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "#F5F9FF" } }}>
                            <Avatar sx={{ bgcolor: "#F3E5F5", color: "#8E24AA" }}><CloudQueueIcon /></Avatar>
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700} color="#0D2A3F">4. Deployment Layer</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    Containerized environment (Docker) facilitating scalable deployment on cloud infrastructure or local hospital servers.
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Paper>

                {/* LIMITATIONS SECTION */}
                <Paper elevation={0} sx={{ p: 5, borderRadius: 4, border: "1px solid #E0E0E0", bgcolor: "white" }}>
                    <Typography variant="h5" fontWeight={800} gutterBottom color="#0D2A3F" sx={{ mb: 3 }}>
                        Technical Constraints & Limitations
                    </Typography>
                    
                    <Box>
                        <Accordion elevation={0} sx={{ border: "1px solid #EEE", borderRadius: 2, mb: 1, '&:before': {display: 'none'} }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={600} color="#0D2A3F">Dataset Bias & Representation</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    Models were trained on publicly available datasets (UCI, Kaggle, ISIC). While robust, they may not fully reflect the demographic diversity, noise levels, or missing data patterns found in real-world Electronic Health Records (EHR).
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion elevation={0} sx={{ border: "1px solid #EEE", borderRadius: 2, mb: 1, '&:before': {display: 'none'} }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={600} color="#0D2A3F">Image Variability (Melanoma)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    The EfficientNet CNN performs optimally on standard dermoscopic images. Performance may degrade on clinical photographs taken with poor lighting, low resolution, or without a dermoscope.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion elevation={0} sx={{ border: "1px solid #EEE", borderRadius: 2, '&:before': {display: 'none'} }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={600} color="#0D2A3F">Interpretability ("Black Box" AI)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    Deep learning models (CNNs, DNNs) offer high accuracy but limited explainability compared to decision trees. While we provide confidence scores, the specific feature contribution for image analysis is not fully transparent.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Paper>

            </Grid>

            {/* RIGHT COLUMN: SPECS & STACK */}
            <Grid item xs={12} md={4}>
                
                {/* PERFORMANCE METRICS CARD */}
                <Paper elevation={4} sx={{ p: 4, borderRadius: 4, bgcolor: "#0D2A3F", color: "white", mb: 4 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <SpeedIcon sx={{ color: "#4FC3F7" }} /> Performance Specs
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                        Benchmarked on standard cloud infrastructure.
                    </Typography>
                    
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="caption" sx={{ opacity: 0.7, fontWeight: 600 }}>INFERENCE LATENCY</Typography>
                            <Typography variant="h4" fontWeight={700}>0.8s</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>Average response time for structured data.</Typography>
                        </Box>
                        <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
                        <Box>
                            <Typography variant="caption" sx={{ opacity: 0.7, fontWeight: 600 }}>UPTIME RELIABILITY</Typography>
                            <Typography variant="h4" fontWeight={700}>99.9%</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>Stateless API design ensures high availability.</Typography>
                        </Box>
                        <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
                        <Box>
                            <Typography variant="caption" sx={{ opacity: 0.7, fontWeight: 600 }}>CONCURRENT REQUESTS</Typography>
                            <Typography variant="h4" fontWeight={700}>50+</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>Users supported simultaneously without degradation.</Typography>
                        </Box>
                    </Stack>
                </Paper>

                {/* SECURITY & PRIVACY CARD */}
                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: "white", border: "1px solid #E0E0E0" }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom color="#0D2A3F" sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <SecurityIcon color="primary" /> Security Protocols
                    </Typography>
                    
                    <Stack spacing={2}>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                            <CheckCircleIcon color="success" fontSize="small" sx={{ mt: 0.5 }} />
                            <Box>
                                <Typography variant="subtitle2" fontWeight={700}>Stateless Architecture</Typography>
                                <Typography variant="body2" color="text.secondary">No patient PII is stored on the server.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                            <CheckCircleIcon color="success" fontSize="small" sx={{ mt: 0.5 }} />
                            <Box>
                                <Typography variant="subtitle2" fontWeight={700}>End-to-End Encryption</Typography>
                                <Typography variant="body2" color="text.secondary">All data transmission secured via HTTPS/TLS.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                            <CheckCircleIcon color="success" fontSize="small" sx={{ mt: 0.5 }} />
                            <Box>
                                <Typography variant="subtitle2" fontWeight={700}>HIPAA Compliant Design</Typography>
                                <Typography variant="body2" color="text.secondary">Adheres to minimum necessary data principles.</Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Paper>

            </Grid>

        </Grid>
      </Container>
    </Box>
  );
}