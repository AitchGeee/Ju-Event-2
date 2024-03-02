import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StateCheckRoute from "./routes/StateCheckRoute";
import {SecurityLayout} from "./layouts/SecurityLayout";
import {DashboardLayout} from "./layouts/DashboardLayout";
import {ThemeProvider} from "@mui/material";
import {Theme} from "./theme/Theme";
import AddEvent from "./features/events/AddEvent";
import {Navigate} from 'react-router';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to={'dashboard'} />} />
                    <Route path="security/*" element={<SecurityLayout/>}/>
                    <Route path={"/*"} element={<StateCheckRoute/>}>
                        <Route path="dashboard/*" element={<DashboardLayout/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
