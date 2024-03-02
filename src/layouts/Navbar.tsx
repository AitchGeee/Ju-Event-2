import {AppBar, Button, styled, Toolbar, Typography} from '@mui/material';
import {palette} from '../theme/ColorPalette';
import {useNavigate} from 'react-router';


const StyledAppBar = styled(AppBar)(({theme}) => ({
    flexShrink:"0",
    backgroundColor: palette.primary.main,
    paddingInline: '180px',
    [theme.breakpoints.down('sm')]: {
        paddingInline: '18px'
    }
}))

export default function Navbar() {
    const navigate=useNavigate()
    return (
        <StyledAppBar position={'static'}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
                <Typography color={palette.secondary.main} variant={'juEvents'}>{'JU EVENTS'}</Typography>
                {/* eslint-disable-next-line no-restricted-globals */}
                {!location.href.includes('security') &&
                    <Button color="inherit"> <Typography color={palette.secondary.main}
                                                         variant={'juEvents'} onClick={()=>navigate("/security/login")}>{'LOGOUT'}</Typography></Button>}
            </Toolbar>
        </StyledAppBar>
    )
}