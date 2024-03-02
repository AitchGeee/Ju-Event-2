import BadgeIcon from '@mui/icons-material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardCard from "./DashboardCard";
import {Box, Button, styled, Typography} from "@mui/material";
import ApprovalIcon from "@mui/icons-material/Approval";
import {palette} from "../../../theme/ColorPalette";

const MyProfile = styled(Button)({
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
const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    flex: "auto"
})
const Wrapper=styled(DashboardCard)({
    gridArea:"myProfile"
})
export default function MyProfileCard() {
    return (
        <Wrapper icon={BadgeIcon} index={0} header={"My profile"} >
            <AccountCircleIcon sx={{fontSize:"100px"}}/>
            <Typography variant={"juEventsLight"}>{"Hamza alali"}</Typography>
            <Container>
                <Typography variant={"juEventsXLight"}>{"Manage the information that you'd like to use across all your events"}</Typography>

            </Container>
        </Wrapper>
    )
}