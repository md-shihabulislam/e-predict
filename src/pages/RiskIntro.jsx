import { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  Tabs, 
  Tab,
  Paper,
  Fade,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

// Icons
import FemaleIcon from '@mui/icons-material/Female'; 
import AirIcon from '@mui/icons-material/Air'; 
import BiotechIcon from '@mui/icons-material/Biotech'; 
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// --- FULL CONTENT DATA ---
const riskDetails = [
  {
    id: 0,
    label: "Breast Cancer",
    icon: <FemaleIcon />,
    color: "#E91E63",
    subtitle: "Understanding Breast Health",
    content: {
      definition: "Breast cancer originates in the tissue of the breast, most commonly the milk ducts (ductal carcinoma) or milk-producing lobules (lobular carcinoma). When cancer remains confined to these structures, it is classified as non-invasive (in situ). Once it spreads beyond these boundaries into surrounding tissue, it becomes invasive breast cancer. Classifications include Hormone receptor-positive, HER2-positive, Triple-negative, and Inflammatory breast cancer.",
      riskFactors: [
        "Inherited genetic mutations (BRCA1, BRCA2, TP53, CHEK2, PALB2).",
        "Hormonal factors: Prolonged exposure to estrogen (early menstruation, late menopause, hormone therapy).",
        "Lifestyle factors: Alcohol use, obesity (especially post-menopause), poor diet, lack of exercise.",
        "Age: Most cases occur after age 50 due to accumulated genetic damage.",
        "Previous exposure to chest radiation, particularly during childhood."
      ],
      symptoms: [
        "A newly detected lump or area of thickening in the breast or underarm.",
        "Persistent breast pain that does not fluctuate with the menstrual cycle.",
        "Changes in breast size, shape, or contour.",
        "Alterations to breast skin texture, including dimpling, puckering, or inflammation.",
        "Nipple inversion or discharge not associated with breastfeeding (especially bloody).",
        "Redness, rash-like symptoms, warmth, or swelling across the breast surface."
      ],
      actionSteps: [
        "Consult an Oncology Team (Medical oncologist, radiation oncologist, breast surgeon).",
        "Understand the Diagnosis and Stage (Localized vs. Metastatic).",
        "Discuss Treatment Options: Surgery, radiation, chemotherapy, hormone therapy, or targeted therapy.",
        "Consider a Second Opinion for complex cases.",
        "Explore Support Resources: Counseling, nutrition guidance, and patient education."
      ]
    }
  },
  {
    id: 1,
    label: "Lung Cancer",
    icon: <AirIcon />,
    color: "#2196F3",
    subtitle: "Respiratory Risk Assessment",
    content: {
      definition: "Lung cancer originates in the tissues of the lungs responsible for oxygen exchange. It is categorized into Non–small cell lung cancer (NSCLC), which accounts for 80–85% of cases, and Small cell lung cancer (SCLC), which is less common but more aggressive and characterized by rapid growth.",
      riskFactors: [
        "Tobacco smoking: Responsible for the majority of cases (active and secondhand).",
        "Radon gas: A naturally occurring radioactive gas found indoors.",
        "Exposure to Asbestos fibers (insulation/industrial materials).",
        "Air pollution and industrial chemicals (diesel exhaust, arsenic).",
        "Genetic predisposition heightening sensitivity to carcinogens."
      ],
      symptoms: [
        "A persistent cough lasting more than three weeks.",
        "Coughing up blood or rust-colored sputum.",
        "Shortness of breath, wheezing, or difficulty breathing.",
        "Persistent chest pain, especially when coughing or breathing deeply.",
        "Unexplained fatigue, loss of appetite, or rapid weight loss.",
        "Recurrent respiratory infections such as bronchitis or pneumonia."
      ],
      actionSteps: [
        "Meet with an Oncology Team to confirm cancer type and staging.",
        "Consider Molecular Testing for genetic mutations (EGFR, ALK, KRAS, etc.).",
        "Stop Smoking Immediately to improve treatment effectiveness.",
        "Understand Treatment Options: Surgery, radiation, chemotherapy, or immunotherapy.",
        "Seek emotional and rehabilitation support."
      ]
    }
  },
  {
    id: 2,
    label: "Thyroid Cancer",
    icon: <BiotechIcon />,
    color: "#9C27B0",
    subtitle: "Endocrine Health Guide",
    content: {
      definition: "Thyroid cancer arises in the thyroid gland, a butterfly-shaped organ at the base of the neck. It begins when cells mutate and grow uncontrollably. Types include Papillary (most common), Follicular, Medullary (genetic syndromes), and Anaplastic (rare/aggressive).",
      riskFactors: [
        "Exposure to ionizing radiation, particularly during childhood.",
        "Family history of thyroid cancer or genetic syndromes (e.g., MEN).",
        "Gender and Age: More common in women and diagnosed between ages 25–65.",
        "Genetic mutations, either inherited or acquired."
      ],
      symptoms: [
        "A painless lump or swelling in the neck.",
        "Hoarseness or persistent voice changes.",
        "Difficulty swallowing or breathing.",
        "Enlarged lymph nodes in the neck.",
        "Neck pain radiating to the jaw or ears."
      ],
      actionSteps: [
        "Consult an Endocrinologist for biopsy and imaging confirmation.",
        "Discuss Treatment: Surgery (thyroidectomy), radioactive iodine, or hormone suppression.",
        "Begin Thyroid Hormone Replacement if the thyroid is removed.",
        "Attend Scheduled Follow-Ups to monitor hormone levels and tumor markers."
      ]
    }
  },
  {
    id: 3,
    label: "Melanoma",
    icon: <WbSunnyIcon />,
    color: "#FF9800",
    subtitle: "Skin Lesion Analysis",
    content: {
      definition: "Melanoma is a serious skin cancer developing from melanocytes (pigment cells). It typically develops on sun-exposed skin but can occur elsewhere (under nails, mouth). It is evaluated based on depth of invasion (Breslow thickness) and staging.",
      riskFactors: [
        "Ultraviolet (UV) radiation from sunlight or tanning beds.",
        "Frequent or severe sunburns, especially during childhood.",
        "Fair skin, light eyes, light hair, or a high number of moles.",
        "Family history of melanoma or weakened immune system.",
        "Genetic abnormalities in repair or growth-regulating genes."
      ],
      symptoms: [
        "A (Asymmetry): One half doesn't match the other.",
        "B (Border): Irregular, ragged, or blurred edges.",
        "C (Color): Variations of black, brown, tan, or red.",
        "D (Diameter): Greater than 6 mm (pencil eraser size).",
        "E (Evolving): Changes in shape, size, or symptoms (itching/bleeding).",
        "Additional signs: Itching, bleeding, pain, or nodule development."
      ],
      actionSteps: [
        "Consult a Dermatologist for biopsy and staging.",
        "Discuss Treatments: Surgical removal, immunotherapy, targeted therapy, or radiation.",
        "Monitor Skin Regularly for recurrence or new lesions.",
        "Adopt Sun Protection: Use broad-spectrum sunscreen and avoid tanning beds."
      ]
    }
  }
];

export default function RiskIntro({ onNavigate }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activeData = riskDetails[value];

  return (
    <Box sx={{ bgcolor: "#F4F6F8", minHeight: "100vh", pb: 8 }}>
      
      {/* --- UPGRADED COVER SECTION --- */}
      <Box 
        sx={{ 
          position: "relative",
          bgcolor: "#0D2A3F", 
          // Professional Medical/DNA Abstract Background
          backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 10, 
          textAlign: "center",
          color: "white",
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(13, 42, 63, 0.85)', // Dark Blue Overlay for text readability
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
            <Typography variant="overline" sx={{ letterSpacing: 2, color: "#4FC3F7", fontWeight: 700, fontSize: "0.9rem" }}>
                PATIENT EDUCATION CENTER
            </Typography>
            <Typography variant="h2" fontWeight={800} sx={{ mt: 1, mb: 3, letterSpacing: "-0.5px" }}>
                Understanding Cancer Risks
            </Typography>
            <Typography variant="h6" sx={{ color: "#B0BEC5", lineHeight: 1.6, maxWidth: 750, mx: "auto", fontWeight: 400 }}>
                Knowledge is the first step in prevention. Explore detailed causes, warning signs, and medically recommended action plans for the major cancer types analyzed by our AI.
            </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6, position: "relative", zIndex: 3 }}>
        {/* --- MAIN LAYOUT: FLEXBOX --- */}
        <Paper 
            elevation={3} 
            sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                borderRadius: 4, 
                overflow: "hidden", 
                minHeight: 600,
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)"
            }}
        >
            
            {/* --- LEFT SIDEBAR --- */}
            <Box sx={{ 
                width: { xs: "100%", md: 280 }, 
                bgcolor: "#FFFFFF", 
                borderRight: "1px solid #F0F0F0",
                flexShrink: 0 
            }}>
                <Box sx={{ p: 3, bgcolor: "#FAFAFA", borderBottom: "1px solid #F0F0F0" }}>
                    <Typography variant="subtitle2" fontWeight={700} color="text.secondary" sx={{ letterSpacing: 1 }}>
                        SELECT CONDITION
                    </Typography>
                </Box>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTabs-indicator': { width: 4, backgroundColor: activeData.color, left: 0 }
                    }}
                >
                    {riskDetails.map((item, index) => (
                        <Tab 
                            key={item.id} 
                            label={item.label} 
                            icon={item.icon}
                            iconPosition="start"
                            sx={{ 
                                justifyContent: "flex-start", 
                                py: 3, 
                                px: 3,
                                fontSize: "0.95rem",
                                fontWeight: value === index ? 700 : 500,
                                color: value === index ? item.color : "#555",
                                bgcolor: value === index ? `${item.color}08` : "transparent",
                                transition: "0.2s",
                                "&:hover": { bgcolor: "#F5F5F5" }
                            }} 
                        />
                    ))}
                </Tabs>
            </Box>

            {/* --- RIGHT CONTENT AREA --- */}
            <Box sx={{ flexGrow: 1, bgcolor: "#FAFAFA", p: { xs: 2, md: 5 } }}>
                
                <Fade in={true} key={activeData.id} timeout={500}>
                    <Box>
                        {/* Content Header */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                            <Avatar 
                                variant="rounded" 
                                sx={{ 
                                    bgcolor: activeData.color, 
                                    width: 56, 
                                    height: 56, 
                                    boxShadow: `0 4px 20px ${activeData.color}40` 
                                }}
                            >
                                {activeData.icon}
                            </Avatar>
                            <Box>
                                <Typography variant="h4" fontWeight={700} color="#0D2A3F">
                                    {activeData.label}
                                </Typography>
                                <Chip 
                                    label={activeData.subtitle} 
                                    size="small" 
                                    sx={{ mt: 0.5, bgcolor: `${activeData.color}15`, color: activeData.color, fontWeight: 600 }} 
                                />
                            </Box>
                        </Box>

                        {/* Definition Card */}
                        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #EAEAEA" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
                                    <LocalHospitalIcon color="primary" />
                                    <Typography variant="h6" fontWeight={700}>Definition</Typography>
                                </Box>
                                <Typography color="text.secondary" sx={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
                                    {activeData.content.definition}
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Split Grid: Risk Factors & Symptoms */}
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 3 }}>
                            
                            {/* Risk Factors (Why It Happens) */}
                            <Card sx={{ flex: 1, borderRadius: 3, border: "1px solid #EAEAEA", boxShadow: "none" }}>
                                <CardContent>
                                    <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                                        <FactCheckIcon sx={{ color: "#FF9800" }} />
                                        <Typography variant="h6" fontWeight={700}>Why it happens?</Typography>
                                    </Box>
                                    <List dense disablePadding>
                                        {activeData.content.riskFactors.map((text, i) => (
                                            <ListItem key={i} disablePadding sx={{ mb: 1, alignItems: "flex-start" }}>
                                                <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                                    <CircleIcon sx={{ fontSize: 8, color: "#FF9800" }} />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={text} 
                                                    primaryTypographyProps={{ variant: "body2", color: "text.secondary", sx: { lineHeight: 1.5 } }} 
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>

                            {/* Symptoms (When to Worry) */}
                            <Card sx={{ flex: 1, borderRadius: 3, border: "1px solid #EAEAEA", boxShadow: "none" }}>
                                <CardContent>
                                    <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                                        <WarningAmberIcon color="error" />
                                        <Typography variant="h6" fontWeight={700}>When to worry?</Typography>
                                    </Box>
                                    <List dense disablePadding>
                                        {activeData.content.symptoms.map((text, i) => (
                                            <ListItem key={i} disablePadding sx={{ mb: 1, alignItems: "flex-start" }}>
                                                <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                                    <CircleIcon sx={{ fontSize: 8, color: "error.main" }} />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={text} 
                                                    primaryTypographyProps={{ variant: "body2", color: "text.secondary", sx: { lineHeight: 1.5 } }} 
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* Action Plan (What Should They Do) */}
                        <Paper 
                            elevation={0} 
                            sx={{ 
                                bgcolor: "#E3F2FD", 
                                p: 3, 
                                borderRadius: 3, 
                                display: "flex", 
                                flexDirection: "column",
                                gap: 2
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Box sx={{ p: 1, bgcolor: "white", borderRadius: "50%" }}>
                                    <HealthAndSafetyIcon color="primary" fontSize="medium" />
                                </Box>
                                <Typography variant="h6" fontWeight={700} color="primary.main">
                                    If Diagnosed: What Should They Do?
                                </Typography>
                            </Box>
                            
                            <List dense disablePadding>
                                {activeData.content.actionSteps.map((step, i) => (
                                    <ListItem key={i} disablePadding sx={{ mb: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <CheckCircleIcon sx={{ fontSize: 18, color: "primary.main" }} />
                                        </ListItemIcon>
                                        <ListItemText 
                                            primary={step} 
                                            primaryTypographyProps={{ variant: "body2", color: "#0D47A1", fontWeight: 500 }} 
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                <Button 
                                    variant="contained" 
                                    disableElevation 
                                    onClick={() => onNavigate("tool")} 
                                    sx={{ 
                                        borderRadius: 50, 
                                        textTransform: "none", 
                                        fontWeight: 700, 
                                        whiteSpace: "nowrap",
                                        px: 4
                                    }}
                                >
                                    Assess My Risk Now <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                                </Button>
                            </Box>
                        </Paper>

                    </Box>
                </Fade>

            </Box>
        </Paper>
      </Container>
    </Box>
  );
}