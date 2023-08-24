import React from 'react'
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { PaletteMode } from '@mui/material';


const header_color = 'rgb(255, 255. 255, 0.7)';
const drawerWidth = 200


export default function Topbar() {


    return (
        <div style={{ width: `calc(100%- ${drawerWidth}px)`}}>
            <AppBar color='transparent'  position='sticky' elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems={'center'}>
                        <Grid item xs/>
                        <Grid item>
                            <Link href='https://www.google.com/' variant='body2' sx={{ textDecoration: 'none', color: 'lightcoral', '&:hover': {color: 'white'}}} rel='noopener noreferrer' target='_blank'>
                                The name of the HOA
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Notifications • No notifications">
                                <IconButton color='inherit'>
                                    <NotificationsIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color='inherit' sx={{ padding: '.5px' }}>
                                <Avatar src='' alt=" HOA/'s Pic or avatar" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component='div' color='transparent' position='static' sx={{ zIndex: 0 }}>
                <Toolbar>
                    <Grid container alignContent='center' spacing={1}>
                        <Grid item xs>
                            <Typography color= 'default' variant='h4' component='h1'>
                                Templates
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems='center' spacing={1}>
                                <Grid item>
                                    <Button sx={{ borderColor: 'black' }} variant='outlined' color='inherit' size='small'>
                                        BUTTON. TO BE DETERMINED
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Tooltip title='Help'>
                                        <IconButton color='inherit'>
                                            <InfoIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component='div' position='static' elevation={0} sx={{ zIndex: 0, backgroundColor: 'gray' }}>
                <Tabs value={0}  sx={{ padding: '1px', justifyContent: 'space-between'}}>
                    <Tab label='Prior Templates'/>
                    <Tab label='Edit Template' />
                    <Tab label='Create New Template'/>
                    <Tab label='Approved Templates'/>
                </Tabs>
            </AppBar>
        </div>
    );
}
