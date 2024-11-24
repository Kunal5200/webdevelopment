import { Typography, Card, Grid2, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

const FabricInformation = () => {
  const [data, setData] = useState<any | null>(null);
  const [fabricData, setFabricData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const storedFabricData = localStorage.getItem("fabricData");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
    if (storedFabricData) {
      setFabricData(JSON.parse(storedFabricData));
    }
  }, []);

  return (
    <div>
      <Typography sx={{ fontSize: 40, textAlign: "center", mb: 4 }}>
        Fabric Information
      </Typography>
      <Container maxWidth="lg">
        {data && (
          <Card sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              General Information
            </Typography>
            <Typography>Start Date: {data.startDate}</Typography>
            <Typography>End Date: {data.endDate}</Typography>
            <Typography>Production: {data.production}</Typography>
            <Typography>Order: {data.order}</Typography>
            <Typography>Major Fabric: {data.majorFabric}</Typography>
            <Typography>
              China Fabrics: {data.chinaFabrics.join(", ")}
            </Typography>
            <Typography>Trims: {data.trims.join(", ")}</Typography>
            <Typography>Accessories: {data.accessories.join(", ")}</Typography>
          </Card>
        )}

        <Grid2 container spacing={3}>
          {fabricData.map((fabric, index) => (
            <Grid2 size={6} key={index}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {fabric.fabricName}
                </Typography>
                <Typography>Requirement: {fabric.requirement}</Typography>
                <Typography>Unit: {fabric.unit}</Typography>
                <Typography>
                  Processes:{" "}
                  {fabric.processes.map((p: any) => p.label).join(", ")}
                </Typography>
                <Typography>Color: {fabric.color}</Typography>
                <Typography>Quantity: {fabric.quantity}</Typography>
                <Typography>
                  Skipped Stages:{" "}
                  {fabric.skippedStages.map((s: any) => s.label).join(", ")}
                </Typography>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default FabricInformation;
