import {createTheme} from "@mui/material";
import {CardDefault} from "./components/Cards";
import {typography} from "./components/Typography";
import {CustomTypographyVariants} from "./types";
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends CustomTypographyVariants {}
}
export const Theme = createTheme({
    breakpoints: {
        values: {
            xs: 480,
            sm: 768,
            md: 1024,
            lg: 1366,
            xl: 1599,
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        ...typography
    },
    components: {
        MuiCard: {
            styleOverrides: CardDefault
        },
    }
})