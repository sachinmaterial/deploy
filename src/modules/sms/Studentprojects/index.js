import * as React from "react";
import Box from "@mui/material/Box";
import ClippedDrawer from "../header";
import Toolbar from "@mui/material/Toolbar";
import Project from "./project";
import styled from "styled-components";

const Content = styled(Box)`
  margin: 0 3% 0 1% !important;
  background: white !important
`;

export default function Studentprojects() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ClippedDrawer />
        <Content component="" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Project />
        </Content>
      </Box>
    </>
  );
}

