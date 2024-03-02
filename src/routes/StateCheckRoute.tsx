import {Outlet} from "react-router";
import {Skeleton} from "@mui/material";
import {useEffect, useState} from "react";

export default function StateCheckRoute() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        console.log("not anonymous")
        setIsLoading(false)
    }, []);

    if (isLoading) {
        return <Skeleton />
    }
    else {
        return <Outlet/>;
    }
}

