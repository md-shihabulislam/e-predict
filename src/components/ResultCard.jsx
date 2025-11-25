import { Card, CardContent, Typography, LinearProgress, Box, Chip } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

export default function ResultCard({ prediction, probability }) {
  // Logic: 0 = Low Risk (Negative), 1 = High Risk (Positive)
  const isHighRisk = prediction === 1;

  // Formatting
  const label = isHighRisk ? "Potential Positive (High Risk)" : "Negative (Low Risk)";
  const color = isHighRisk ? "error" : "success"; // MUI palette names
  const percentage = (probability * 100).toFixed(1);
  const bgColor = isHighRisk ? "#FEF2F2" : "#ECFDF5"; // Light red vs Light green
  const borderColor = isHighRisk ? "#FCA5A5" : "#6EE7B7";

  return (
    <Card 
      elevation={0} 
      sx={{ 
        mt: 4, 
        border: `1px solid ${borderColor}`, 
        backgroundColor: bgColor,
        borderRadius: 3 
      }}
    >
      <CardContent sx={{ textAlign: "center", py: 4 }}>
        
        {/* Icon */}
        {isHighRisk ? (
          <WarningIcon color="error" sx={{ fontSize: 60, mb: 1, opacity: 0.8 }} />
        ) : (
          <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 1, opacity: 0.8 }} />
        )}

        {/* Main Result Text */}
        <Typography variant="h5" fontWeight={800} color={`${color}.main`} gutterBottom>
          Result: {label}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Based on the clinical features provided, the model estimates:
        </Typography>

        {/* Probability Bar */}
        <Box sx={{ width: "80%", mx: "auto", mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="caption" fontWeight={600} color="text.secondary">
              Confidence Score
            </Typography>
            <Typography variant="caption" fontWeight={700} color={`${color}.main`}>
              {percentage}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={probability * 100}
            color={color}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>

        {/* Disclaimer Chip */}
        <Chip 
          label="AI Prediction - Not a Medical Diagnosis" 
          variant="outlined" 
          size="small" 
          sx={{ mt: 2, borderColor: "rgba(0,0,0,0.1)", color: "text.secondary" }}
        />

      </CardContent>
    </Card>
  );
}