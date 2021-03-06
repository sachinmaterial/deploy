import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ClippedDrawer from "../header";

import styled from "styled-components";
import Course from "./course";
const ContentBox = styled(Box)`
  margin: 0 3% 0 1% !important;
  background: white !important;
`;

export default function OnGoingCourse() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ClippedDrawer />
        <ContentBox component="" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Course />
        </ContentBox>
      </Box>
    </>
  );
}
