import {Box, styled,} from "@mui/material";
import MyProfileCard from "./components/MyProfileCard";
import ApplyCard from "./components/ApplyCard";
import RecentEventsCard from "./components/RecentEventsCard";
import MyEventsCard from "./components/MyEventsCard";
import CalenderCard from "./components/CalenderCard";
import {useResponsive} from "../../theme/useResponsive";


const Layout = styled(Box)(({theme}) => ({
    height:"100%",
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    gridTemplateRows: "50% 50%",
    gap: "2%",
    gridTemplateAreas: `
        "myProfile apply recentEvents"
        "myEvents calender recentEvents"
    `,
    [theme.breakpoints.down('sm')]: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    }
}))


export default function Dashboard() {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            {
                !isMobile ?
                    <>
                        <MyProfileCard/>
                        <ApplyCard/>
                        <RecentEventsCard/>
                        <MyEventsCard/>
                        <CalenderCard/>
                    </>
                    :
                    <>
                        <MyProfileCard/>
                        <ApplyCard/>
                        <MyEventsCard/>
                        <CalenderCard/>
                        <RecentEventsCard/>
                    </>
            }
        </Layout>
    )
}