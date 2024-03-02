import {Box, Stack, styled, Typography} from "@mui/material";
import EventsLayout from "../../layouts/pages/EventsLayout";
import Event from "./Event";
import EventsSort, {Option} from "./EventsSort";
import {useState} from "react";

const FilterContainer=styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    gap:"30px",
    paddingInline:"40px"
})
const Content=styled(Stack)({
    maxWidth:"650px",
    gap:"30px"
})
export default function Events(){
    const tagPlaceHolder={
        label:"TAG",
        value:""
    }
    const locationPlaceHolder={
        label:"LOCATION",
        value:""
    }
    const sortPlaceHolder={
        label:"SORT",
        value:""
    }
    const [tag,setTag]=useState<Option>(tagPlaceHolder)
    const [location,setLocation]=useState<Option>(locationPlaceHolder)
    const [sort,setSort]=useState<Option>(sortPlaceHolder)

    const updateTag = async (props: any) => {
        setTag({value: props.target.value, label: props.target.value})
    }
    const updateLocation = async (props: any) => {
        setLocation({value: props.target.value, label: props.target.value})
    }
    const updateSort = async (props: any) => {
        setSort({value: props.target.value, label: props.target.value})
    }
    return(
        <EventsLayout index={2} pageName={"Events"}>
            <Content>
                <Typography>{"EVENTS PAGE EVENTS PAGE EVENTS PAGE EVENTS PAGE EVENTS PAGE EVENTS PAGE "}</Typography>
                <FilterContainer>
                    <EventsSort placeHolder={tagPlaceHolder.label} options={[{value:"10",label:"Ten"},{value:"9",label:"Nine"},{value:"8",label:"Eight"}]} selectedValue={tag.value} updateValue={updateTag}/>
                    <EventsSort placeHolder={locationPlaceHolder.label} options={[{value:"10",label:"Ten"},{value:"9",label:"Nine"},{value:"8",label:"Eight"}]} selectedValue={location.value} updateValue={updateLocation}/>
                    <EventsSort placeHolder={sortPlaceHolder.label} options={[{value:"10",label:"Ten"},{value:"9",label:"Nine"},{value:"8",label:"Eight"}]} selectedValue={sort.value} updateValue={updateSort}/>
                </FilterContainer>
                <Event index={0}/>
                <Event index={1}/>
                <Event index={2}/>
            </Content>
        </EventsLayout>
    )
}