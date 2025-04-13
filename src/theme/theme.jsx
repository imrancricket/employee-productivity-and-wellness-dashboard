import { amber } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber
  }
};

const white = "#fff";
const lightGray = "#f1f1f1";
const middleGray = "#687e96";
const dark = "#101418";
const lightDark = "#6983ac";
const middleDark = "#0f1924";

export const getDesignTokens = (mode) => ({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: () =>
          mode === "light"
            ? {
                backgroundColor: white,
                color: dark
              }
            : {
                backgroundColor: middleDark,
                color: white
              }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: mode === "light" ? dark : white
        }
      }
    },
    // MuiInputBase: {
    //     styleOverrides: {
    //         root: {
    //             "&.MuiInputBase-root": {
    //                 "& input": {
    //                     padding: "10px",
    //                 },
    //             },
    //         },
    //     },
    // },
    // MuiInputLabel: {
    //     styleOverrides: {
    //         root: {
    //             transform: "translate(14px, 10px) scale(1)"
    //         },
    //     },
    // },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: mode === "dark" && white
        }
      }
    }
  },
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
      `'Poppins', sans-serif`
    ].join(",")
  },
  palette: {
    primary: {
      main: "#9747FF"
    },
    ...(mode === "light"
      ? {
          contrastThreshold: 2.5,
          background: {
            // paper: "#C4C3CD",
            // default: "#C4C3CD"
            paper: white,
            default: white
          },
          text: {
            // primary: "#343D55",
            // secondary: "#343D55"
            primary: dark,
            secondary: middleGray
          }
        }
      : {
          contrastThreshold: 4.5,
          background: {
            paper: middleDark,
            default: dark
          },
          text: {
            // primary: "#C4C3CD",
            // secondary: "#C4C3CD"
            primary: white,
            secondary: lightGray
          }
        })
  }
});

export default theme;
