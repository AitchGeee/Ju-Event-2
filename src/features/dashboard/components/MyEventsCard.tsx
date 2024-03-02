import BadgeIcon from '@mui/icons-material/Badge';
import DashboardCard from "./DashboardCard";
import {Box, Button, styled, Typography} from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
import {palette} from "../../../theme/ColorPalette";
import ApprovalIcon from '@mui/icons-material/Approval';
import {useNavigate} from "react-router";
const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    height: "100%",
    flex:"auto"
})
const Apply = styled(Button)({
    color: palette.greyPalette.greyMuted,
    '&:hover': {
        backgroundColor: palette.background.default,
        color:palette.primary.main
    },
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    paddingInlineStart:"0px"
})
const Wrapper=styled(DashboardCard)({
    gridArea:"myEvents"
})
export default function MyEventsCard() {
    const navigate=useNavigate();
    return (
        <Wrapper icon={EventIcon} index={2} header={"My Events"}>
            <Container>
                <Typography
                    variant={"juEventsXLight"}>{"Keep track of all your applied events!"}</Typography>
                <Apply onClick={()=> navigate("/dashboard/my-events")}>
                    <Typography variant={"juEvents"}>{"My Events"}</Typography>
                    <ApprovalIcon/>
                </Apply>
            </Container>
        </Wrapper>
    )
}