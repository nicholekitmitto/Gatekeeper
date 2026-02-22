import React from "react";
import MuiCard from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export function Card(props: { children: React.ReactNode; title?: string }) {
  return (
    <MuiCard>
      {props.title && <CardHeader title={props.title} />}
      <CardContent style={{ position: "relative" }}>{props.children}</CardContent>
    </MuiCard>
  );
}
