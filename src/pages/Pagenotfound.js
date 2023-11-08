import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const Pagenotfound = () => {
  return (
    <Layout>
      <Box sx={{ mx: "auto", my: 10, textAlign: "center", p: 2 }}>
        <Typography variant="h3">404 - Page not found</Typography>
      </Box>
    </Layout>
  );
};

export default Pagenotfound;
