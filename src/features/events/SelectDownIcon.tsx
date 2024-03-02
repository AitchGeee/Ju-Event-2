import React from "react";
import {SVGAttributes} from "react";
import {palette} from "../../theme/ColorPalette";
export type IconProps = SVGAttributes<SVGElement> & {
    size?: number
}
const Icon = (props: IconProps) => (
    <svg
        fill="none"
        viewBox="0 0 16 16"
        width={props.size || 16}
        height={props.size || 16}
        {...props}
    >
        <path
            className="stroke"
            d="M4 6l4 4 4-4"
            stroke={palette.primary.dark || '#949494'}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export const ChevronDownIcon = React.memo(Icon)
