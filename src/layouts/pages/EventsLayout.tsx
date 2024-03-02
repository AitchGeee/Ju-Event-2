import {Box, Card, Stack, styled, Typography} from "@mui/material";
import {palette} from "../../theme/ColorPalette";
import WestIcon from '@mui/icons-material/West';
import {useNavigate} from "react-router";

const Layout = styled(Card)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "700px",
    padding: "30px",
    position: "relative",
    height: "100%",
    gap: "10px"
})
const Header = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px"
})
const ArrowBack = styled(WestIcon)({
    fontSize: "50px",
    '&:hover': {
        backgroundColor: palette.background.default,
        color: palette.primary.main
    },
    transition: "color 0.2s",
})

type Props = {
    index: number,
    children: any,
    pageName: string
}
export default function EventsLayout({index, children, pageName}: Props) {
    const navigate = useNavigate();
    return (
        <Layout sx={{borderTopColor: palette.randomColors[index]}}>
            <Header>
                <ArrowBack onClick={() => navigate("/dashboard")}/>
                <Typography variant={"hero"}>{pageName}</Typography>
            </Header>
            {children}
        </Layout>
    )
}