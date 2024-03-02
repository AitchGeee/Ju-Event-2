import {palette} from "../../../theme/ColorPalette";
import {Box, Button, Card, Stack, styled, Typography} from "@mui/material";
import RecentEvent from "./RecentEvent";
import ApprovalIcon from "@mui/icons-material/Approval";
import {useNavigate} from "react-router";

const CardHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between"
})
const HeaderText = styled(Typography)({
    fontWeight: 500,
    fontSize: 24,
    lineHeight: "14px"
})
const EventsCard = styled(Card)({
    boxSizing: "border-box",
    padding: "20px",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
    gridArea:"recentEvents",
    gap:"20px"
})
const Events = styled(Button)({
    color: palette.greyPalette.greyMuted,
    '&:hover': {
        backgroundColor: palette.background.default,
        color: palette.primary.main
    },
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingInlineStart: "0px"
})
export default function RecentEventsCard() {
    const navigate=useNavigate();

    return (
        <EventsCard sx={{borderTopColor: palette.randomColors[6]}}>
            <Stack gap={"20px"}>
                <CardHeader>
                    <HeaderText variant={"header"}>{"Recent Events"}</HeaderText>
                </CardHeader>
                <Typography
                    variant={"juEventsXLight"}>{"Here are the most recent events!"}</Typography>
                <RecentEvent/>
                <RecentEvent/>
                <RecentEvent/>
                <RecentEvent/>
            </Stack>
            <Stack gap={"10px"}>
                <Typography
                    variant={"juEventsXLight"}>{"Click here to explore all the events!"}</Typography>
                <Events onClick={()=> navigate("/dashboard/events")}>
                    <Typography variant={"juEvents"}>{"Events"}</Typography>
                    <ApprovalIcon/>
                </Events>
            </Stack>
        </EventsCard>
    )
}