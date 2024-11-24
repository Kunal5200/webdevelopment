import { data } from "@/assests/data";
import { FabricData, ProcessOption } from "@/utils/types";
import {
  Autocomplete,
  Button,
  Card,
  Container,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Fabrics = () => {
  const [value, setValue] = useState<FabricData[]>([]);
  const [errors, setErrors] = useState<{ [key: number]: Partial<FabricData> }>({});
  const router = useRouter();

  useEffect(() => {
    const newData = localStorage.getItem("data");
    if (newData) {
      const parsedData = JSON.parse(newData);
      const formattedData = parsedData.fabricName.map((name: string) => ({
        fabricName: name,
        requirement: "",
        unit: "",
        processes: [],
        color: "",
        quantity: "",
        skippedStages: [],
      }));
      setValue(formattedData);
    }
  }, []);

  const handleFieldChange = (
    index: number,
    field: keyof FabricData,
    newValue: any
  ) => {
    // For processes and skippedStages, ensure the value is an array of ProcessOption objects
    if (field === "processes" || field === "skippedStages") {
      newValue = newValue.map((item: ProcessOption) => ({
        value: item.value,
        label: item.label,
      }));
    }

    setValue((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: newValue } : item
      )
    );

    // Clear the error for the field when the user updates it
    setErrors((prev) => ({
      ...prev,
      [index]: { ...prev[index], [field]: undefined },
    }));
  };

  const validateFields = (): boolean => {
    const newErrors: { [key: number]: Partial<FabricData> } = {};
    let isValid = true;

    value.forEach((fabric, index) => {
      const fieldErrors: Partial<FabricData> = {};

      if (!fabric.requirement.trim()) {
        fieldErrors.requirement = "Requirement is required";
        isValid = false;
      }

      if (!fabric.unit.trim()) {
        fieldErrors.unit = "Unit is required";
        isValid = false;
      }

     

      if (!fabric.color.trim()) {
        fieldErrors.color = "Color is required";
        isValid = false;
      }

      if (!fabric.quantity.trim()) {
        fieldErrors.quantity = "Quantity is required";
        isValid = false;
      }

      

      if (Object.keys(fieldErrors).length > 0) {
        newErrors[index] = fieldErrors;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateFields()) {
      return;
    }

    localStorage.setItem("fabricData", JSON.stringify(value));
    router.push("/fabricInformation");
  };

  return (
    <div>
      <Typography sx={{ textAlign: "center", mb: 3, mt: 3, fontSize: 40 }}>
        Enter Fabric Information
      </Typography>
      <Container maxWidth="lg">
        <Grid2 container spacing={3} sx={{ mb: 4 }}>
          {value.map((fabric, i) => (
            <Grid2 size={6} key={i}>
              <Card sx={{ p: 2 }}>
                <Grid2 container spacing={3}>
                  <Grid2 size={12}>
                    <TextField
                      label="Fabric Name*"
                      value={fabric.fabricName}
                      fullWidth
                      disabled
                    />
                  </Grid2>
                  <Grid2 size={7}>
                    <TextField
                      label="Per Piece Requirement*"
                      value={fabric.requirement}
                      fullWidth
                      type="number"
                      onChange={(e) =>
                        handleFieldChange(i, "requirement", e.target.value)
                      }
                      error={!!errors[i]?.requirement}
                      helperText={errors[i]?.requirement}
                    />
                  </Grid2>
                  <Grid2 size={5}>
                    <RadioGroup
                      row
                      value={fabric.unit}
                      onChange={(e) =>
                        handleFieldChange(i, "unit", e.target.value)
                      }
                    >
                      <FormControlLabel
                        value="m"
                        control={<Radio />}
                        label="M"
                      />
                      <FormControlLabel
                        value="kg"
                        control={<Radio />}
                        label="KG"
                      />
                    </RadioGroup>
                    {errors[i]?.unit && (
                      <Typography color="error" variant="body2">
                        {errors[i]?.unit}
                      </Typography>
                    )}
                  </Grid2>
                  <Grid2 size={12}>
                    <Autocomplete
                      value={fabric.processes}
                      onChange={(_, newValue) =>
                        handleFieldChange(i, "processes", newValue)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Processes*"
                          error={!!errors[i]?.processes}
                        />
                      )}
                      options={data.processes}
                      getOptionLabel={(option) => option.label}
                      isOptionEqualToValue={(option, value) =>
                        option.value === value.value
                      }
                      multiple
                      filterSelectedOptions
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <TextField
                      label="Color"
                      value={fabric.color}
                      fullWidth
                      onChange={(e) =>
                        handleFieldChange(i, "color", e.target.value)
                      }
                      error={!!errors[i]?.color}
                      helperText={errors[i]?.color}
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <TextField
                      label="Quantity"
                      value={fabric.quantity}
                      fullWidth
                      type="number"
                      onChange={(e) =>
                        handleFieldChange(i, "quantity", e.target.value)
                      }
                      error={!!errors[i]?.quantity}
                      helperText={errors[i]?.quantity}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Autocomplete
                      value={fabric.skippedStages}
                      onChange={(_, newValue) =>
                        handleFieldChange(i, "skippedStages", newValue)
                      }
                      multiple
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Stages to be skipped"
                          error={!!errors[i]?.skippedStages}
                        />
                      )}
                      options={data.skippedStages}
                      filterSelectedOptions
                    />
                  </Grid2>
                </Grid2>
              </Card>
            </Grid2>
          ))}
        </Grid2>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 4 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Fabrics;
