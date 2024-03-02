import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type ResponsiveProps = {
    isSmallMobile: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isSmallDesktop: boolean;
    isMediumDesktop: boolean;
}

export function useResponsive(): ResponsiveProps {
    const theme = useTheme();

    const isSmallMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallDesktop = useMediaQuery(theme.breakpoints.down('lg'));
    const isMediumDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return {
        isSmallMobile,
        isMobile,
        isTablet,
        isSmallDesktop,
        isMediumDesktop
    }
}
