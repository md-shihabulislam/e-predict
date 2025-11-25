import { useState } from "react";
import api from "../api";
import {
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
  CircularProgress,
  Alert,
  MenuItem,
  Box,
  Divider,
  Paper,
  IconButton,
  Tooltip,
  InputAdornment
} from "@mui/material";
import ResultCard from "./ResultCard";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ScienceIcon from '@mui/icons-material/Science';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RefreshIcon from '@mui/icons-material/Refresh';
import StraightenIcon from '@mui/icons-material/Straighten';
import OpacityIcon from '@mui/icons-material/Opacity';
import MasksIcon from '@mui/icons-material/Masks';

export default function NumericCancerForm({ title, apiUrl, fields, color = "#007AFF" }) {
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormValues({});
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    setResult(null);
    setError(null);

    // 1. Basic Validation
    const missing = fields.filter(f => 
        formValues[f.name] === undefined || 
        formValues[f.name] === "" || 
        formValues[f.name] === null
    );

    if (missing.length > 0) {
      setError(`Please fill in: ${missing.map(f => f.label).slice(0, 3).join(", ")}${missing.length > 3 ? "..." : ""}`);
      return;
    }

    setLoading(true);

    try {
      // 2. Data Transformation
      const payload = { ...formValues };
      fields.forEach(field => {
          if (field.type === "number") {
              payload[field.name] = parseFloat(payload[field.name]);
          }
      });

      const response = await api.post(apiUrl, payload);
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Prediction failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // Improved Icon Mapping
  const getFieldIcon = (name, label) => {
    const l = label.toLowerCase();
    if (l.includes("age") || l.includes("gender")) return <PersonOutlineIcon />;
    if (l.includes("radius") || l.includes("perimeter") || l.includes("area")) return <StraightenIcon />;
    if (l.includes("texture") || l.includes("smoothness")) return <OpacityIcon />;
    if (l.includes("smoking") || l.includes("alcohol")) return <MasksIcon />;
    if (l.includes("pressure") || l.includes("heart")) return <MonitorHeartIcon />;
    return <MedicalServicesOutlinedIcon />;
  };

  const renderField = (field) => (
    // FORCE WIDTH: xs={12} (full width mobile), md={6} (half width desktop)
    // Added 'xl={6}' to explicitly tell extra large screens to also use 2 columns (preventing the 7-column squash)
    <Grid item xs={12} sm={12} md={6} xl={6} key={field.name} sx={{ minWidth: '250px' }}>
      {field.options ? (
        <TextField
          select
          fullWidth
          label={field.label}
          value={formValues[field.name] !== undefined ? formValues[field.name] : ""}
          onChange={(e) => handleChange(field.name, e.target.value)}
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: color, opacity: 0.7 }}>
                {getFieldIcon(field.name, field.label)}
              </InputAdornment>
            ),
          }}
          sx={{ 
            bgcolor: "#F8F9FA",
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              transition: 'all 0.2s ease-in-out',
              '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
              '&:hover': { bgcolor: "#FFFFFF" },
              '&:hover fieldset': { borderColor: color },
              '&.Mui-focused fieldset': { borderColor: color, borderWidth: 2 },
              '&.Mui-focused': { bgcolor: "#FFFFFF", boxShadow: `0 4px 20px rgba(0,0,0,0.08)` }
            },
            '& .MuiInputLabel-root': { color: '#555', fontSize: '0.95rem' },
            '& .MuiInputLabel-root.Mui-focused': { color: color }
          }}
        >
          {field.options.map((option, index) => {
            const val = typeof option === "object" ? option.value : option;
            const lbl = typeof option === "object" ? option.label : option;
            return <MenuItem key={index} value={val}>{lbl}</MenuItem>;
          })}
        </TextField>
      ) : (
        <TextField
          fullWidth
          label={field.label}
          type="number"
          variant="outlined"
          size="medium"
          value={formValues[field.name] || ""}
          onChange={(e) => handleChange(field.name, e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: color, opacity: 0.7 }}>
                {getFieldIcon(field.name, field.label)}
              </InputAdornment>
            ),
          }}
          sx={{ 
            bgcolor: "#F8F9FA",
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              transition: 'all 0.2s ease-in-out',
              '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
              '&:hover': { bgcolor: "#FFFFFF" },
              '&:hover fieldset': { borderColor: color },
              '&.Mui-focused fieldset': { borderColor: color, borderWidth: 2 },
              '&.Mui-focused': { bgcolor: "#FFFFFF", boxShadow: `0 4px 20px rgba(0,0,0,0.08)` }
            },
            '& .MuiInputLabel-root': { color: '#555', fontSize: '0.95rem' },
            '& .MuiInputLabel-root.Mui-focused': { color: color }
          }}
          inputProps={{ step: "any" }}
        />
      )}
    </Grid>
  );

  const isBreastCancer = fields.length > 20;
  
  const renderFormContent = () => {
    if (isBreastCancer) {
      const meanFields = fields.slice(0, 10);
      const seFields = fields.slice(10, 20);
      const worstFields = fields.slice(20, 30);

      return (
        <>
          <Typography variant="subtitle2" sx={{ mt: 1, mb: 3, color: color, fontWeight: 800, letterSpacing: 1, display: "flex", alignItems: "center", gap: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}>
            <ScienceIcon fontSize="small" /> Mean Features
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>{meanFields.map(renderField)}</Grid>
          
          <Divider sx={{ mb: 4, borderStyle: "dashed", opacity: 0.6 }} />
          
          <Typography variant="subtitle2" sx={{ mb: 3, color: color, fontWeight: 800, letterSpacing: 1, display: "flex", alignItems: "center", gap: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}>
            <ScienceIcon fontSize="small" /> Standard Error (SE)
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>{seFields.map(renderField)}</Grid>
          
          <Divider sx={{ mb: 4, borderStyle: "dashed", opacity: 0.6 }} />

          <Typography variant="subtitle2" sx={{ mb: 3, color: color, fontWeight: 800, letterSpacing: 1, display: "flex", alignItems: "center", gap: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}>
             <ScienceIcon fontSize="small" /> Worst Values
          </Typography>
          <Grid container spacing={4}>{worstFields.map(renderField)}</Grid>
        </>
      );
    } else {
      return (
        <>
          <Typography variant="subtitle2" sx={{ mt: 1, mb: 3, color: "#666", fontWeight: 700, display: "flex", alignItems: "center", gap: 1, fontSize: '0.9rem' }}>
            <PersonOutlineIcon fontSize="small" /> Patient Demographics & Clinical Signs
          </Typography>
          {/* Explicitly set wrap to ensure items don't stay on one line */}
          <Grid container spacing={4} wrap="wrap">
            {fields.map(renderField)}
          </Grid>
        </>
      );
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 4, 
          border: "1px solid #E0E0E0", 
          overflow: "hidden", 
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
          bgcolor: "#FFFFFF"
        }}
      >
          {/* Header Bar */}
          <Box sx={{ 
              background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
              px: { xs: 3, md: 5 }, 
              py: 4, 
              color: "white", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between" 
          }}>
              <Box>
                  <Typography variant="h5" fontWeight={800} sx={{ letterSpacing: -0.5 }}>
                      CLINICAL INPUTS
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5, fontWeight: 500 }}>
                      Please ensure all values are measured in standard units.
                  </Typography>
              </Box>
              
              <Tooltip title="Fill all fields for the highest accuracy.">
                <IconButton sx={{ color: "white", bgcolor: "rgba(255,255,255,0.15)", '&:hover': { bgcolor: "rgba(255,255,255,0.25)" } }}>
                  <HelpOutlineIcon />
                </IconButton>
              </Tooltip>
          </Box>

        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          
          {renderFormContent()}

          {error && (
            <Alert severity="error" sx={{ mt: 4, borderRadius: 2, border: "1px solid #ef5350" }}>
              <Typography fontWeight={600}>Submission Error</Typography>
              {error}
            </Alert>
          )}

          <Divider sx={{ my: 5 }} />

          {/* Footer Actions */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Button 
                onClick={handleReset}
                startIcon={<RefreshIcon />}
                sx={{ color: "text.secondary", textTransform: "none", fontWeight: 600 }}
              >
                Reset Form
              </Button>

              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                disabled={loading}
                endIcon={!loading && <PlayArrowIcon />}
                sx={{ 
                    px: 6,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    backgroundColor: color,
                    borderRadius: 50,
                    boxShadow: `0 8px 20px ${color}40`,
                    textTransform: "none",
                    transition: "all 0.2s",
                    "&:hover": { 
                      backgroundColor: color, 
                      filter: "brightness(0.9)",
                      transform: "translateY(-2px)",
                      boxShadow: `0 12px 30px ${color}50`
                    } 
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Run Analysis"}
              </Button>
          </Box>

          {result && (
            <Box sx={{ mt: 6, animation: "fadeIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
              <ResultCard prediction={result.prediction} probability={result.probability} />
            </Box>
          )}
        </CardContent>
      </Paper>
    </Box>
  );
}