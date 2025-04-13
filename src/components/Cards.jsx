import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ course, total_students,icon }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {icon}
        </Typography>
        <Typography variant="h5" component="div">
          {course}
        </Typography>
        <Typography variant="body2">{total_students}</Typography>
      </CardContent>
    </Card>
  );
}
