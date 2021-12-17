import { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useStore } from 'effector-react';
import { $authStore } from 'store/auth';
import { FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TOKEN_KEY } from '../../constants';
import { useStyles } from './styles';

export const Header = () => {
    const classes = useStyles();
    const user = useStore($authStore);

    console.log('in header', user);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
    }, [user]);

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.leftHeader}>
                        <div className={classes.logo}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                <Link to="/">Test project</Link>
                            </Typography>

                            <Link to="/favorites" className={classes.headerLink}>
                                Favorites list
                            </Link>

                            <Link to="/films" className={classes.headerLink}>
                                Films
                            </Link>

                            <Link to="/serials" className={classes.headerLink}>
                                Serials
                            </Link>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </div>
                    <div className={classes.sectionDesktop}>
                        {user ? (
                            <Button className={classes.headerButtons} color="inherit">
                                <FaUserTimes className={classes.headerIcon} />
                                <Link to="/logout">
                                    <span className={classes.btnText}>Logout</span>
                                </Link>
                            </Button>
                        ) : (
                            <Button className={classes.headerButtons} color="inherit">
                                <FaUserTimes className={classes.headerIcon} />
                                <Link to="/login">
                                    <span className={classes.btnText}>Login</span>
                                </Link>
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
