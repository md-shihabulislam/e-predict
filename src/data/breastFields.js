const breastFields = [
  // ----------------------------------------------------
  // SECTION 1: MEAN VALUES (1-10)
  // These will appear in the first group on the UI
  // ----------------------------------------------------
  { name: "radius_mean", label: "Radius (Mean)", type: "number" },
  { name: "texture_mean", label: "Texture (Mean)", type: "number" },
  { name: "perimeter_mean", label: "Perimeter (Mean)", type: "number" },
  { name: "area_mean", label: "Area (Mean)", type: "number" },
  { name: "smoothness_mean", label: "Smoothness (Mean)", type: "number" },
  { name: "compactness_mean", label: "Compactness (Mean)", type: "number" },
  { name: "concavity_mean", label: "Concavity (Mean)", type: "number" },
  { name: "concave points_mean", label: "Concave Points (Mean)", type: "number" },
  { name: "symmetry_mean", label: "Symmetry (Mean)", type: "number" },
  { name: "fractal_dimension_mean", label: "Fractal Dimension (Mean)", type: "number" },

  // ----------------------------------------------------
  // SECTION 2: STANDARD ERROR (11-20)
  // These will appear in the second group
  // ----------------------------------------------------
  { name: "radius_se", label: "Radius (SE)", type: "number" },
  { name: "texture_se", label: "Texture (SE)", type: "number" },
  { name: "perimeter_se", label: "Perimeter (SE)", type: "number" },
  { name: "area_se", label: "Area (SE)", type: "number" },
  { name: "smoothness_se", label: "Smoothness (SE)", type: "number" },
  { name: "compactness_se", label: "Compactness (SE)", type: "number" },
  { name: "concavity_se", label: "Concavity (SE)", type: "number" },
  { name: "concave points_se", label: "Concave Points (SE)", type: "number" },
  { name: "symmetry_se", label: "Symmetry (SE)", type: "number" },
  { name: "fractal_dimension_se", label: "Fractal Dimension (SE)", type: "number" },

  // ----------------------------------------------------
  // SECTION 3: WORST VALUES (21-30)
  // These will appear in the final group
  // ----------------------------------------------------
  { name: "radius_worst", label: "Radius (Worst)", type: "number" },
  { name: "texture_worst", label: "Texture (Worst)", type: "number" },
  { name: "perimeter_worst", label: "Perimeter (Worst)", type: "number" },
  { name: "area_worst", label: "Area (Worst)", type: "number" },
  { name: "smoothness_worst", label: "Smoothness (Worst)", type: "number" },
  { name: "compactness_worst", label: "Compactness (Worst)", type: "number" },
  { name: "concavity_worst", label: "Concavity (Worst)", type: "number" },
  { name: "concave points_worst", label: "Concave Points (Worst)", type: "number" },
  { name: "symmetry_worst", label: "Symmetry (Worst)", type: "number" },
  { name: "fractal_dimension_worst", label: "Fractal Dimension (Worst)", type: "number" }
];

export default breastFields;