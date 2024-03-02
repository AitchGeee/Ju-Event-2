import { ComponentsOverrides, Theme } from '@mui/material'
import { palette } from '../ColorPalette'

export const CardDefault: ComponentsOverrides<Theme>['MuiCard'] = {
    root: () => {
        return ({
            width: '100%',
            backgroundColor: palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            maxWidth: '1440px',
            minHeight:"inherit",
            borderRadius: '0 0 24px 24px',
            boxShadow: 'rgba(203, 203, 203, 0.1) 0px 5px 12px, rgba(194, 194, 194, 0.15) 0px 2px 2px',
        })
    },
}
