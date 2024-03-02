import {Route, Routes} from "react-router-dom";
import Login from "../features/login/Login";
import Register from "../features/register/Register";
import {Outlet} from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
const CONSTANTS = {

    LOGIN_PATH: 'login',
    REGISTER_PATH: 'register'
}
export function SecurityLayout() {
    return (
            <Routes>
                <Route path={'/'} element={<RenderLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path={CONSTANTS.LOGIN_PATH} element={<Login/>}/>
                    <Route path={CONSTANTS.REGISTER_PATH} element={<Register/>}/>
                </Route>
            </Routes>
    )
}

function RenderLayout() {

    return (
     <> 
        <Navbar/>
         <Outlet/>
        <Footer/>
     </>
    )
}
