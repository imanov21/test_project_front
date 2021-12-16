import { darken, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
            theme.palette.primary.dark,
            0.5
        )} 100%)`,
        color: theme.palette.primary.contrastText,
    },
}));
