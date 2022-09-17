import { extendTheme } from "native-base";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export type CustomThemeType = typeof THEME;

export const THEME = extendTheme({
  colors: {
    primary: {
      700: "#1E262E",
      600: "#212831",
      500: "#323841",
      400: "#2F353E",
    },
    red: {
      500: "#F32135",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  variables: {
    width,
    height,
  },
});
