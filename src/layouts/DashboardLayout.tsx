import {Route, Routes} from "react-router-dom";
import Dashboard from "../features/dashboard/Dashboard";
import Events from "../features/events/Events";
import {Outlet} from "react-router";
import Profile from "../features/profile/Profile";
import About from "../features/about/About";
import React from "react";
import {Box, Stack, styled} from '@mui/material';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {palette} from "../theme/ColorPalette";
import MyEvents from '../features/myEvents/MyEvents';
import Calendar from '../features/calendar/Calendar';
import AddEvent from '../features/events/AddEvent';


const Container = styled(Stack)(({theme}) => ({
    flex:"auto",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding: "50px 200px",
    backgroundColor: palette.background.default,
    [theme.breakpoints.down('sm')]: {
        padding:"20px"
    }
}))

const Layout = styled(Stack)(({theme}) => ({
    height: "100vh",
    display:"flex",
    flexDirection:"column",

    [theme.breakpoints.down('sm')]: {
        height:"auto"
    }
}))

const CONSTANTS = {
    PROFILE_PATH: 'profile',
    EVENTS_PATH: 'events',
    ABOUT_PATH: "about",
    MY_EVENTS_PATH: "my-events",
    CALENDAR_PATH: "calendar",
    ADD_EVENT_PATH:"add-event"
}

export function DashboardLayout() {
    return (
        <Routes>
            <Route path={'/'} element={<RenderLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path={CONSTANTS.ABOUT_PATH} element={<About/>}/>
                <Route path={CONSTANTS.PROFILE_PATH} element={<Profile/>}/>
                <Route path={CONSTANTS.EVENTS_PATH} element={<Events/>}/>
                <Route path={CONSTANTS.MY_EVENTS_PATH} element={<MyEvents/>}/>
                <Route path={CONSTANTS.CALENDAR_PATH} element={<Calendar/>}/>
                <Route path={CONSTANTS.ADD_EVENT_PATH} element={<AddEvent/>}/>
            </Route>
        </Routes>
    )
}

function RenderLayout() {

    return (
        <Layout>
            <Navbar/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </Layout>
    )
}
