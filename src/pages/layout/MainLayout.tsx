import { Box, Drawer, Stack } from "@mui/material";
import { DRAWER_WIDTH } from "../../constants/Constant";
import MenuItems from "./MenuItems";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Stack direction="row" flex={1}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        <MenuItems />
      </Drawer>
      <Box
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          m: 0,
          p: 0,
          ml: `${DRAWER_WIDTH}px`,
          minHeight: "100vh",
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MainLayout;
