import DashboardCard from "./DashboardCard";
import {Box, Button, styled, Typography} from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
import {palette} from "../../../theme/ColorPalette";
import ApprovalIcon from '@mui/icons-material/Approval';
import { useNavigate } from "react-router";
const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    flex: "auto"
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
    gridArea:"apply"
})

export default function ApplyCard() {
    const navigate=useNavigate();
    return (
       
        <Wrapper icon={EventIcon} index={1} header={"Apply"}> 
        
            <Container>
                <Typography
                    variant={"juEventsXLight"}>{"Your exciting events fuel our drive for improvement, inspiring both us and the students. Apply for these incredible opportunities here!"}</Typography>
                    <Apply onClick={()=> navigate ("add-event")}>
                        <Typography variant={"juEvents"}>{"Apply"}</Typography>
                        <ApprovalIcon/>
                    </Apply>
            </Container>
        </Wrapper>
    )
}