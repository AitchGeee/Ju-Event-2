import {palette} from "../../../theme/ColorPalette";
import {Box, Card, styled, Typography} from "@mui/material";
import DashboardCard from "./DashboardCard";
import {useNavigate} from "react-router";

const RecentEventsBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
})
const RecentEvents = styled(Card)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    boxSizing: "border-box"
})
const Wrapper = styled(RecentEventsBox)(({theme}) => ({
    gridArea:"recentEvents",
    [theme.breakpoints.down('sm')]: {
        height: "100%",
    }
}))
export default function RecentEvent() {
    return (
        <Wrapper>
            <RecentEvents sx={{borderTopColor: palette.randomColors[3]}}>
                <Typography
                    variant={"juEvents"}>{"SAMPLE EVENT"}</Typography>
                <Typography
                    variant={"juEventsLight"}>{"SAMPLE DESCRIPTION"}</Typography>
                <Typography fontSize={"14px"}
                            variant={"juEventsXLight"}>{"11/7/2023"}</Typography>
            </RecentEvents>
        </Wrapper>
    )
}