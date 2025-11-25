import { Box, Typography, Card, CardActionArea, Grid, Button, Container, Paper, Chip } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FemaleIcon from '@mui/icons-material/Female'; 
import AirIcon from '@mui/icons-material/Air'; 
import BiotechIcon from '@mui/icons-material/Biotech'; 
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export default function Home({ onNavigate }) { 
  
  const cancers = [
    {
      id: "breast",
      title: "Breast Cancer",
      short: "Screening based on standard tissue features.",
      image: "https://images.unsplash.com/photo-1646617747609-4647730e056c?q=80&w=2070&auto=format&fit=crop",
      definition: "Breast cancer occurs when cells in the breast grow uncontrollably. It is one of the most common cancers worldwide. Early detection through mammograms significantly improves survival rates.",
      causes: [
        "Genetic mutations (BRCA1/BRCA2).",
        "Aging (risk increases over age 50).",
        "Reproductive history.",
        "Family history of breast cancer."
      ],
      icon: <FemaleIcon sx={{ fontSize: 40, color: "#E91E63" }} />, 
      color: "#E91E63",
      bgColor: "#FCE4EC"
    },
    {
      id: "lung",
      title: "Lung Cancer",
      short: "Risk assessment based on lifestyle & symptoms.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
      definition: "Lung cancer is the leading cause of cancer deaths globally. While smoking is the main risk factor, non-smokers can also be affected by environmental pollutants like radon and asbestos.",
      causes: [
        "Cigarette smoking (85% of cases).",
        "Secondhand smoke exposure.",
        "Exposure to Radon gas or Asbestos.",
        "Air pollution."
      ],
      icon: <AirIcon sx={{ fontSize: 40, color: "#2196F3" }} />, 
      color: "#2196F3",
      bgColor: "#E3F2FD"
    },
    {
      id: "thyroid",
      title: "Thyroid Cancer",
      short: "Clinical prediction based on pathology & stage.",
      image: "https://images.unsplash.com/photo-1576091160550-2187d80a1a44?auto=format&fit=crop&q=80",
      definition: "Thyroid cancer occurs in the butterfly-shaped gland at the base of the neck. It is highly treatable when detected early. Symptoms often include a painless lump or difficulty swallowing.",
      causes: [
        "Exposure to high levels of radiation.",
        "Inherited genetic syndromes.",
        "Low iodine levels in diet.",
        "Gender (women are 3x more likely)."
      ],
      icon: <BiotechIcon sx={{ fontSize: 40, color: "#9C27B0" }} />, 
      color: "#9C27B0",
      bgColor: "#F3E5F5"
    },
    {
      id: "melanoma",
      title: "Melanoma",
      short: "AI analysis of dermoscopic skin lesion images.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
      definition: "Melanoma is the most dangerous form of skin cancer, developing in the cells that produce pigment. It often resembles a new mole or a change in an existing one.",
      causes: [
        "UV radiation (Sun/Tanning beds).",
        "Having many moles or fair skin.",
        "History of blistering sunburns.",
        "Weakened immune system."
      ],
      icon: <WbSunnyIcon sx={{ fontSize: 40, color: "#FF9800" }} />, 
      color: "#FF9800",
      bgColor: "#FFF3E0"
    },
  ];

  return (
    <Box>
      {/* --- HERO SECTION --- */}
      <Box 
        sx={{ 
          backgroundImage: 'linear-gradient(rgba(13, 42, 63, 0.9), rgba(13, 42, 63, 0.8)), url(https://images.unsplash.com/photo-1579684385136-4f8995f52a87?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 14, 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)"
        }}
      >
        <Container maxWidth="md">
          <Chip 
            icon={<MedicalServicesIcon sx={{ color: "#4FC3F7 !important" }} />}
            label="AI-POWERED ONCOLOGY" 
            sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "#4FC3F7", fontWeight: 700, mb: 3, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }} 
          />
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ letterSpacing: "-1px", lineHeight: 1.1 }}>
            Know Your Risk. <br/>
            <span style={{ color: "#4FC3F7" }}>Take Control.</span>
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 5, maxWidth: 700, mx: "auto", color: "#E0E0E0", lineHeight: 1.6, fontWeight: 400 }}>
            E-predict combines medical data with advanced AI to help you estimate cancer risks. 
            Understand the conditions below, then use our tools to assess your own risk factors.
          </Typography>

          <Button 
            variant="contained" 
            size="large"
            onClick={() => {
              const section = document.getElementById('prediction-section');
              if(section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{ 
              backgroundColor: "#007AFF",
              borderRadius: "50px", 
              px: 6, 
              py: 1.8, 
              fontSize: "1.1rem",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 0 30px rgba(0, 122, 255, 0.6)",
              "&:hover": { backgroundColor: "#005ec4", transform: "scale(1.05)", transition: "0.2s" }
            }}
          >
            Start Assessment
          </Button>
        </Container>
      </Box>

      {/* --- DETAILED MEDICAL INFO SECTION --- */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={1.5}>EDUCATION</Typography>
            <Typography variant="h3" fontWeight={800} color="#0D2A3F" gutterBottom>
                Understanding the Conditions
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontSize: "1.1rem" }}>
                Before using the prediction tools, familiarize yourself with the definitions and common risk factors.
            </Typography>
          </Box>

          {cancers.map((c, index) => (
            <Box key={c.title} sx={{ mb: 12 }}>
              <Grid 
                container 
                spacing={8} 
                alignItems="center" 
                direction={index % 2 === 1 ? "row-reverse" : "row"} 
              >
                
                {/* IMAGE SIDE */}
                <Grid size={{ xs: 12, md: 6 }}> {/* Fixed Grid v2 Syntax */}
                    <Paper 
                        elevation={6} 
                        sx={{ 
                            borderRadius: 6, 
                            overflow: 'hidden', 
                            height: 400,
                            position: 'relative',
                            backgroundColor: c.bgColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            component="img"
                            src={c.image} 
                            alt={c.title}
                            sx={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover",
                                position: "absolute",
                                top: 0, left: 0,
                                zIndex: 1
                            }}
                            onError={(e) => { e.target.style.display = 'none'; }} 
                        />
                        
                        {/* Fallback Icon */}
                        <Box sx={{ zIndex: 0, opacity: 0.5, transform: "scale(3)" }}>
                            {c.icon}
                        </Box>

                        {/* Floating Icon Badge */}
                        <Box 
                            sx={{ 
                                position: 'absolute', 
                                bottom: 30, 
                                left: 30, 
                                bgcolor: "white", 
                                p: 2, 
                                borderRadius: "50%",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                                zIndex: 2
                            }}
                        >
                            {c.icon}
                        </Box>
                    </Paper>
                </Grid>

                {/* TEXT CONTENT SIDE */}
                <Grid size={{ xs: 12, md: 6 }}> {/* Fixed Grid v2 Syntax */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                    <Typography variant="h3" fontWeight={800} color={c.color} sx={{ letterSpacing: "-1px" }}>
                      {c.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: "1.15rem", color: "#444", lineHeight: 1.8, mb: 4 }}>
                    {c.definition}
                  </Typography>

                  <Paper elevation={0} sx={{ backgroundColor: "#F8FAFC", p: 4, borderRadius: 4, border: "1px solid #EEF2F6" }}>
                    <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ color: "#0D2A3F", mb: 2, letterSpacing: 1 }}>
                      KEY RISK FACTORS
                    </Typography>
                    <Grid container spacing={2}>
                      {c.causes.map((cause) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={cause}> {/* Fixed Grid v2 Syntax */}
                          <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                            <CheckCircleOutlineIcon sx={{ color: c.color, mt: 0.3, fontSize: 22 }} />
                            <Typography variant="body2" sx={{ fontSize: "0.95rem", color: "#555", fontWeight: 500 }}>
                              {cause}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>

              </Grid>
            </Box>
          ))}
        </Container>
      </Box>

      {/* --- PREDICTION TOOLS SECTION --- */}
      <Box id="prediction-section" sx={{ backgroundColor: "#F0F4F8", py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" fontWeight={800} color="#0D2A3F" gutterBottom>
              Ready to Check Your Risk?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}>
              Select a tool below to input your data. Our AI models will analyze your inputs and provide a risk estimation.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {cancers.map((c) => (
              <Grid size={{ xs: 12, md: 6 }} key={c.title}> {/* Fixed Grid v2 Syntax */}
                <Card 
                  sx={{ 
                    borderRadius: 4, 
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    transition: "0.3s",
                    border: "2px solid transparent",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: c.color,
                      boxShadow: `0 12px 40px ${c.color}20`
                    }
                  }}
                >
                  <CardActionArea onClick={() => onNavigate("tool")} sx={{ p: 4, height: "100%" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}>
                      <Box sx={{ p: 2, borderRadius: "16px", backgroundColor: `${c.color}15` }}>
                        {c.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" fontWeight={700} color="#0D2A3F">
                          {c.title} Tool
                        </Typography>
                        <Typography variant="caption" sx={{ color: c.color, fontWeight: 700, letterSpacing: 1 }}>
                            AI POWERED
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: 48 }}>
                        {c.short}
                    </Typography>
                    
                    {/* REPLACED BUTTON COMPONENT WITH STYLED BOX TO FIX HYDRATION ERROR */}
                    <Box 
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        border: `1px solid ${c.color}`,
                        color: c.color,
                        fontWeight: 700,
                        borderRadius: 2,
                        py: 1,
                        textTransform: "none",
                        transition: "0.3s",
                        "&:hover": { bgcolor: `${c.color}10` }
                      }}
                    >
                        Launch Assessment <ArrowForwardIcon sx={{ ml: 1, fontSize: 20 }} />
                    </Box>

                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- FOOTER DISCLAIMER --- */}
      <Box sx={{ bgcolor: "#0D2A3F", color: "#8E99A3", py: 8, textAlign: "center", fontSize: "0.9rem" }}>
        <Container maxWidth="md">
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            © 2025 E-predict Project. This tool is a research prototype developed for academic purposes at The Kyoto College of Graduate Studies for Informatics.
            <br /> <br />
            <strong>Disclaimer:</strong> This application does not provide medical advice. It is intended for educational use only. Always consult a qualified healthcare professional for diagnosis and treatment.
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}