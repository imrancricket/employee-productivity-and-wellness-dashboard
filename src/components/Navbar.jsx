import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SubjectIcon from '@mui/icons-material/Subject';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuizIcon from '@mui/icons-material/Quiz';
import FilterIcon from '@mui/icons-material/Filter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DataObjectIcon from '@mui/icons-material/DataObject';
import agra_college from "../assets/logo/agra_college.jpg";
import logo_main from "../assets/logo/logo_main.png";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    minHeight:"80px !important",
    justifyContent: "space-between",
}));


export default function PersistentDrawerLeft() {

    const navigate = useNavigate();

    const MenuList = [
        { name: "Dashboard", route: "/dashboard", icon: <DashboardIcon /> },
        { name: "Feedback", route: "/feedback", icon: <PeopleAltIcon /> },
        { name: "Help Corner", route: "/help-corner", icon: <SubjectIcon /> },
        { name: "Wellness Activities", route: "/physical-activities", icon: <FitnessCenterIcon /> },
        // { name: "Subject", route: "/subject", icon: <SubjectIcon /> },
        // { name: "Study Material", route: "/study-material", icon: <SubjectIcon /> },
        // { name: "TimeTable", route: "/time-table", icon: <AccessTimeIcon /> },
        // { name: "Quiz", route: "/quiz", icon: <QuizIcon /> },
        // { name: "Sliders", route: "/slider", icon: <FilterIcon /> },
        // { name: "Gallery", route: "/gallery", icon: <FilterIcon /> },
        // { name: "Staff", route: "/staff", icon: <AccountBoxIcon /> },
        // { name: "Notifications", route: "/notification", icon: <NotificationsActiveIcon /> },
        // { name: "Faq", route: "/faq", icon: <QuizIcon /> },
        // { name: "Logs", route: "/logs", icon: <DataObjectIcon /> },
        // { name: "Config", route: "/config", icon: <QuizIcon /> }
    ];

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <img src={logo_main} style={{ width: "inherit", height: 80 }} /> */}
                        <p style={{fontSize: 25, fontWeight:"bold",color:"#4a5568"}}>Employee Productivity and Wellness</p>
                        <Box>
                            <ThemeSwitcher />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            overflow: "auto",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        {/* <img src={agra_college} style={{ height: 60, width: "50%" }} /> */}
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {MenuList.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={() => { navigate(item.route) }}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Main open={open} sx={{ marginTop: 5 }}>
                    <DrawerHeader />
                    <Outlet />
                </Main>
            </Box>
        </>
    );
}