import { LinearProgress, Box, } from "@mui/material";

const LinearLoader = () => {
  return (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1100,
          }}
        >
          <LinearProgress />
        </Box>
  );
};

export default LinearLoader;
