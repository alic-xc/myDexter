import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#6D68FB",
      dark: "#121212",
      light: "#F8F8F8",
      contrastText: "#475467",
    },
    mode: "light",
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', Montserrat",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: -0.5,
          wordSpacing: 2,
          color: "#7A8EAC",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text
          fontFamily: "'Plus Jakarta Sans',Montserrat",
          color: "#6D68FB",
        },
      },
    },
  },
});
