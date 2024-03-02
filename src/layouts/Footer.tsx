import {Box, styled, Typography} from "@mui/material";
import {palette} from "../theme/ColorPalette";


const Container = styled(Box)(({theme}) => ({
    flexShrink:"0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 180px",
    rowGap: "10px",
    bottom:"0px",
    [theme.breakpoints.down('sm')]: {
        padding:"0px"
    }
}))

export default function Footer() {
    return (
        <Container position={"static"}>
            <Typography  color={palette.secondary.main} variant={"juEvents"}>{"JU-EVENTS"}</Typography>
            <Box display={"flex"} gap={"20px"}>
                <Typography color={palette.greyPalette.greyDark}>{"About JU-EVENTS"}</Typography>
                <Typography color={palette.greyPalette.greyDark}>{"Help Center"}</Typography>
            </Box>
        </Container>
    )
}