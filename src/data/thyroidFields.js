const thyroidFields = [
  { 
    name: "Age", 
    label: "Age (Years)", 
    type: "number" 
  },
  {
    name: "Gender",
    label: "Gender",
    type: "select",
    options: [
      { value: 0, label: "Female" },
      { value: 1, label: "Male" }
    ]
  },
  {
    name: "Smoking",
    label: "Smoking Status",
    type: "select",
    options: [
      { value: 0, label: "Non-Smoker" },
      { value: 1, label: "Smoker" }
    ]
  },
  {
    name: "Hx Smoking",
    label: "History of Smoking",
    type: "select",
    options: [
      { value: 0, label: "No History" },
      { value: 1, label: "Has History" }
    ]
  },
  {
    name: "Hx Radiothreapy",
    label: "History of Radiotherapy",
    type: "select",
    options: [
      { value: 0, label: "No" },
      { value: 1, label: "Yes" }
    ]
  },
  {
    name: "Thyroid Function",
    label: "Thyroid Function",
    type: "select",
    options: [
      { value: 0, label: "Euthyroid (Normal)" },
      { value: 1, label: "Clinical Hyperthyroidism" },
      { value: 2, label: "Clinical Hypothyroidism" },
      { value: 3, label: "Subclinical Hyperthyroidism" },
      { value: 4, label: "Subclinical Hypothyroidism" }
    ]
  },
  {
    name: "Physical Examination",
    label: "Physical Exam Findings",
    type: "select",
    options: [
      { value: 0, label: "Normal / No Goiter" },
      { value: 1, label: "Single Nodular Goiter" },
      { value: 2, label: "Multinodular Goiter" },
      { value: 3, label: "Diffuse Goiter" }
    ]
  },
  {
    name: "Adenopathy",
    label: "Adenopathy (Lymph Nodes)",
    type: "select",
    options: [
      { value: 0, label: "No" },
      { value: 1, label: "Right" },
      { value: 2, label: "Left" },
      { value: 3, label: "Bilateral" },
      { value: 4, label: "Extensive" },
      { value: 5, label: "Posterior" }
    ]
  },
  {
    name: "Pathology",
    label: "Pathology Type",
    type: "select",
    options: [
      { value: 0, label: "Papillary" },
      { value: 1, label: "Micropapillary" },
      { value: 2, label: "Follicular" },
      { value: 3, label: "Hurthle Cell" }
    ]
  },
  {
    name: "Focality",
    label: "Focality",
    type: "select",
    options: [
      { value: 0, label: "Uni-Focal (Single)" },
      { value: 1, label: "Multi-Focal (Multiple)" }
    ]
  },
  {
    name: "Risk",
    label: "Clinical Risk Level",
    type: "select",
    options: [
      { value: 0, label: "Low Risk" },
      { value: 1, label: "Intermediate Risk" },
      { value: 2, label: "High Risk" }
    ]
  },
  {
    name: "T",
    label: "Tumor Stage (T)",
    type: "select",
    options: [
      { value: "1a", label: "T1a" },
      { value: "1b", label: "T1b" },
      { value: "2", label: "T2" },
      { value: "3a", label: "T3a" },
      { value: "3b", label: "T3b" },
      { value: "4a", label: "T4a" },
      { value: "4b", label: "T4b" }
    ]
  },
  {
    name: "N",
    label: "Node Stage (N)",
    type: "select",
    options: [
      { value: 0, label: "N0 (No Spread)" },
      { value: 1, label: "N1a" },
      { value: 2, label: "N1b" }
    ]
  },
  {
    name: "M",
    label: "Metastasis Stage (M)",
    type: "select",
    options: [
      { value: 0, label: "M0 (No Metastasis)" },
      { value: 1, label: "M1 (Metastasis Present)" }
    ]
  },
  {
    name: "Stage",
    label: "Overall Cancer Stage",
    type: "select",
    options: [
      { value: 0, label: "Stage I" },
      { value: 1, label: "Stage II" },
      { value: 2, label: "Stage III" },
      { value: 3, label: "Stage IVA" },
      { value: 4, label: "Stage IVB" }
    ]
  },
  {
    name: "Response",
    label: "Treatment Response",
    type: "select",
    options: [
      { value: 0, label: "Excellent" },
      { value: 1, label: "Biochemical Incomplete" },
      { value: 2, label: "Structural Incomplete" },
      { value: 3, label: "Indeterminate" }
    ]
  }
];

export default thyroidFields;