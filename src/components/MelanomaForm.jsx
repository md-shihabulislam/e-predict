import { useState } from "react";
import api from "../api";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Alert,
  CircularProgress,
  Box,
  Stack,
  IconButton
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ResultCard from "./ResultCard";

export default function MelanomaForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const THEME_COLOR = "#FF9800"; // Orange for Skin

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
      setError(null);
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  const handlePredict = async () => {
    setError(null);
    setResult(null);

    if (!file) {
      setError("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await api.post("/api/predict/melanoma", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Prediction failed. Check backend connection.");
    }
    setLoading(false);
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      <CardContent sx={{ p: 4 }}>
        
        {/* --- Header Section --- */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: `${THEME_COLOR}15` }}>
            <ImageSearchIcon sx={{ color: THEME_COLOR, fontSize: 30 }} />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={700} color="#0D2A3F">
              Melanoma Screening
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload a dermatoscopic image of the lesion for AI analysis.
            </Typography>
          </Box>
        </Box>

        {/* --- Upload Area (Fixed Layout) --- */}
        {!preview ? (
          <Box
            component="label"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 250,
              border: "2px dashed #CFD8DC",
              borderRadius: 3,
              backgroundColor: "#FAFAFA",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                borderColor: THEME_COLOR,
                backgroundColor: `${THEME_COLOR}05`,
                transform: "translateY(-2px)"
              }
            }}
          >
            <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            
            <Box sx={{ p: 2, borderRadius: "50%", bgcolor: "#EFF2F5", mb: 2 }}>
              <CloudUploadIcon sx={{ fontSize: 40, color: "#90A4AE" }} />
            </Box>
            
            <Typography variant="h6" fontWeight={600} color="#455A64">
              Click to Upload Image
            </Typography>
            <Typography variant="body2" color="#90A4AE">
              Supports JPG, PNG (Max 5MB)
            </Typography>
          </Box>
        ) : (
          /* --- Preview Mode --- */
          <Box sx={{ 
            border: `2px solid ${THEME_COLOR}`, 
            borderRadius: 3, 
            overflow: "hidden",
            position: "relative",
            bgcolor: "#000"
          }}>
             <img 
               src={preview} 
               alt="skin lesion" 
               style={{ width: "100%", maxHeight: "400px", objectFit: "contain", display: "block" }} 
             />
             
             {/* Overlay Controls */}
             <Box sx={{ 
               position: "absolute", 
               bottom: 0, 
               left: 0, 
               right: 0, 
               p: 2, 
               background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
               display: "flex",
               justifyContent: "flex-end"
             }}>
               <Button 
                 variant="contained" 
                 color="error" 
                 size="small"
                 startIcon={<DeleteIcon />} 
                 onClick={clearFile}
                 sx={{ borderRadius: 20, textTransform: "none" }}
               >
                 Remove Image
               </Button>
             </Box>
          </Box>
        )}

        {/* --- Error Message --- */}
        {error && (
          <Alert severity="error" sx={{ mt: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {/* --- Action Button --- */}
        <Button
          onClick={handlePredict}
          variant="contained"
          fullWidth
          size="large"
          disabled={!file || loading}
          sx={{ 
            mt: 4, 
            py: 1.8,
            borderRadius: 2,
            fontWeight: 700,
            fontSize: "1rem",
            backgroundColor: THEME_COLOR,
            boxShadow: `0 8px 20px ${THEME_COLOR}40`,
            textTransform: "none",
            "&:hover": { 
                backgroundColor: "#F57C00",
                boxShadow: `0 4px 12px ${THEME_COLOR}60`
            }
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Run AI Analysis"}
        </Button>

        {/* --- Results Display --- */}
        {result && (
          <Box sx={{ mt: 4, animation: "fadeIn 0.5s ease-in-out" }}>
            <ResultCard
              prediction={result.prediction}
              probability={result.probability}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}