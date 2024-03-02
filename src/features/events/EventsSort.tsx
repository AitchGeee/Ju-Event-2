import React from "react";
import {MenuItem, NativeSelect, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {ChevronDownIcon} from "./SelectDownIcon";
import {palette} from "../../theme/ColorPalette";

export type Option = {
    value: string
    label: string
}

export type SortProps = {
    options: Option[]
    updateValue?: (any)
    placeHolder: string
    selectedValue?: string
}

const SelectInputIcon = styled(ChevronDownIcon)({
    position: "absolute",
    marginTop: "-2px"
})

const Option = styled("option")({
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    fontStyle: "normal"
})

const Select = styled(NativeSelect)({
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "22px",
    backgroundColor: 'white',
    '& .MuiInput-input:focus': {
        backgroundColor: 'white'
    },
    width: "100%",
    borderBottom: `1px ${palette.primary.main} solid`
})

export default function EventsSort({updateValue, options, placeHolder, selectedValue}: SortProps) {
    return (
        <>
            <Select
                IconComponent={SelectInputIcon}
                disableUnderline={true}
                defaultValue={placeHolder}
                onChange={updateValue}
                sx={{
                    fontStyle: selectedValue === "" ? "italic" : "normal",
                    fontWeight: selectedValue === "" ? 400 : 500
                }}
            >
                <Option value={""} sx={{fontStyle: "italic", fontWeight: 400 , fontSize:"16px"}}>{placeHolder}</Option>
                {options.map((value, index) => {
                        return (
                            <Option key={index} value={value.value}>{value.label}</Option>
                        )
                    }
                )}
            </Select>
        </>
    )
}