import React, { useState } from 'react'
import { AppBar, Toolbar, Drawer, CssBaseline, IconButton, Typography, Button, Menu, MenuItem} from '@material-ui/core'

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      }, 
      navButton: {
          color: "white"
      }
  }));

const Navigation = ({ sideBarComponent, mainComponent }) => {
    const history = useHistory();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <div className="wrapper">
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" noWrap>
                    Connexa
                </Typography>
                <div className={classes.grow} />
                <Button className={classes.navButton} onClick={() => history.push("/")}>
                    School
                </Button>
                <Button className={classes.navButton} onClick={() => history.push("/feed")}>
                    Opportunities
                </Button>
                <Button className={classes.navButton} onClick={() => history.push("/games")}>
                    Games
                </Button>
                <div className={classes.grow} />
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
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={"primary-search-account-menu"}
                    aria-haspopup="true"
                    color="inherit"

                    onClick={(e) => setAnchorEl(e.target)}
                    >
                    <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        className="LogOutMenu"
                    >
                        <MenuItem className="Log Out" onClick={() => console.log("Logging out")}>Log Out</MenuItem>
                    </Menu>
                </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                  {sideBarComponent}
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                  {mainComponent}
            </main>
            </div>
        </div>
    )
}


export default Navigation;