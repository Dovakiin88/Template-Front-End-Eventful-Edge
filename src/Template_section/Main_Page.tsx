import React from 'react'
import { AppBar } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material/';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { BorderBottom } from '@mui/icons-material';
import { DataTable } from '../Datatable/Datatable';

export default function main_page() {
    return (
        <Paper sx={{ Width: '960px', height: '550px', overflow: 'scroll', bgcolor: 'lightgray', marginLeft: '0px' }}>
            <AppBar position='static' color='transparent' elevation={0} sx={{ BorderBottom: '2px solid rgba(0, 0, 0, 0.12)' }}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color='inherit' sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField fullWidth placeholder='Search by Name of template' InputProps={{ disableUnderline: true, sx:{fontSize: 'default'} }} variant='standard' sx={{ bgcolor: '#A9A9A9' }} />
                        </Grid>
                        <Grid item>
                            <Button variant='contained' sx={{ marginRight: '1px', bgcolor: 'gray' }}>
                                <a href="/create" style={{ color: 'white', textDecoration: 'none' }}>
                                    Create new Template
                                </a>
                                
                            </Button>
                            <Tooltip title='Reload'>
                                <IconButton>
                                    <RefreshIcon color='inherit' sx={{ display:'block' }}/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{ marginTop:'5px', marginBottom: '5px', marginLeft: '2px', marginRight: '2px', border: '2px solid black' }} color='black' align='center'>
                <DataTable />
            </Typography>
        </Paper>
    );
}
