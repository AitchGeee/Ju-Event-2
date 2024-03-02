import React, { useState, useEffect } from 'react';
import { startOfWeek, endOfWeek, format,add } from 'date-fns';
import EventsLayout from "../../layouts/pages/EventsLayout";
import {styled} from '@mui/system';
import {Box, Stack, Typography} from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import {palette} from '../../theme/ColorPalette';
import {useNavigate} from 'react-router';

const ButtonsBox=styled(Box)({
    boxSizing:"border-box",
    width:"100%",
    paddingBlockStart:"50px",
    paddingBlockEnd:"10px",
    paddingInline:"200px",
    display:"flex",
    justifyContent:"space-between",

})
const Header = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderRadius:"11px",
    border:"1px black solid",
    padding:"10px",
    '&:hover': {
        backgroundColor: palette.background.default,
        color: palette.primary.main
    },
    transition: "color 0.1s",
})
const ArrowBack = styled(WestIcon)({
    fontSize: "25px",
    '&:hover': {
        backgroundColor: palette.background.default,
        color: palette.primary.main
    },
    transition: "color 0.2s",
})
const ArrowNext = styled(EastIcon)({
    fontSize: "25px",
    '&:hover': {
        backgroundColor: palette.background.default,
        color: palette.primary.main
    },
    transition: "color 0.2s",
})
const CalendarBox=styled(Box)({
    display:"flex",
    height:"100%",
    boxSizing:"border-box",
    width:"100%",
    paddingInline:"100px",
    gap:"10px"
})
const CalendarColumn=styled(Box)({
    display:"flex",
    flexDirection:"column",
    borderRadius:"11px",
    border:"1px black solid",
    width:"100%",
    alignItems:"center",
    gap:"10px",
})
const WeekDayText=styled(Typography)({
    boxSizing:"border-box",
    padding:"5px",
    border:"2px black solid",
    width:"100%",
    borderTopRightRadius:"11px",
    borderTopLeftRadius:"11px",
    textAlign:"center",
})
const CalendarEvents=styled(Stack)({
    paddingInline:"5px",
    gap:"10px",
})
const CalendarEvent=styled(Box)({
    boxSizing:"border-box",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    border:"1px black solid",
    borderRadius:"21px",
    padding:"10px",
    gap:"1px",
})
export default function Calendar(){
    const navigate = useNavigate();
    const [weekRange, setWeekRange] = useState<any>({ start: null, end: null });
    const [weekOffset,setWeekOffset]=useState(0)
    useEffect(() => {
        const currentDate = add(new Date(), {weeks:weekOffset});

        const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 0 }); // Assuming week starts on Monday
        const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 0 });

        const formattedStartOfWeek = format(startOfWeekDate, 'MMMM d, yyyy');
        const formattedEndOfWeek = format(endOfWeekDate, 'MMMM d, yyyy');

        setWeekRange({ start: formattedStartOfWeek, end: formattedEndOfWeek });
    }, [weekOffset]);


    return (
        <EventsLayout index={2} pageName={"Calendar"}>
            <ButtonsBox>
                <Header onClick={() => setWeekOffset(weekOffset-1)}>
                    <ArrowBack />
                    <Typography variant={"header"}>{"prev"}</Typography>
                </Header>
                <Header>
                    <Typography variant={"header"}>{weekRange.start}</Typography>
                    <Typography variant={"header"}>{"-"}</Typography>
                    <Typography variant={"header"}>{weekRange.end}</Typography>
                </Header>
                <Header onClick={() => setWeekOffset(weekOffset+1)}>
                    <Typography variant={"header"}>{"next"}</Typography>
                    <ArrowNext />
                </Header>
            </ButtonsBox>
            <CalendarBox>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Sunday"}</WeekDayText>
                    <CalendarEvents>
                        <CalendarEvent>
                            <Typography variant={"juEventsSmallBold"}>{"Flowers Picking"}</Typography>
                            <Typography variant={"juEventsSmallBold"}>{"5pm"}</Typography>
                        </CalendarEvent>
                        <CalendarEvent>
                            <Typography variant={"juEventsSmallBold"}>{"Chasing Dreams"}</Typography>
                            <Typography variant={"juEventsSmallBold"}>{"5pm"}</Typography>
                        </CalendarEvent>
                    </CalendarEvents>
                </CalendarColumn>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Monday"}</WeekDayText>
                </CalendarColumn>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Tuesday"}</WeekDayText>
                </CalendarColumn>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Wednesday"}</WeekDayText>
                </CalendarColumn>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Thursday"}</WeekDayText>
                    <CalendarEvents>
                        <CalendarEvent>
                            <Typography variant={"juEventsSmallBold"}>{"Chasing Hope"}</Typography>
                        </CalendarEvent>
                    </CalendarEvents>
                </CalendarColumn>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Friday"}</WeekDayText>
                </CalendarColumn>
                <CalendarColumn>
                    <WeekDayText variant={"header"}>{"Saturday"}</WeekDayText>
                    <CalendarEvents>
                        <CalendarEvent>
                            <Typography variant={"juEventsSmallBold"}>{"Chasing Money"}</Typography>
                        </CalendarEvent>
                        <CalendarEvent>
                            <Typography variant={"juEventsSmallBold"}>{"Chasing Life"}</Typography>
                        </CalendarEvent>
                    </CalendarEvents>
                </CalendarColumn>
            </CalendarBox>
        </EventsLayout>
    );
}