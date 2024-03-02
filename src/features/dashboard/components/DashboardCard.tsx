import {Box, Card, styled, Typography} from "@mui/material";
import {palette} from "../../../theme/ColorPalette";
import BadgeIcon from '@mui/icons-material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";

const StyledCard = styled(Card)(({theme}) => ({
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down('sm')]: {
        minHeight:"300px"
    }
}))


const CardHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})
type Props = {
    index: number,
    icon: any,
    header: string,
    children: any
}
export default function DashboardCard({index, icon, header, children}: Props) {
    return (
        <StyledCard sx={{borderTopColor: palette.randomColors[index]}}>
            <CardHeader>
                <Typography variant={"header"}>{header}</Typography>
                {React.createElement(icon, {
                    fontSize: "large"
                })}
            </CardHeader>
            {children}
        </StyledCard>
    )
}