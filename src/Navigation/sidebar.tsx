import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, ThemeProvider, createTheme } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer/Drawer';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Box from '@mui/material/Box/Box';
import HouseIcon from '@mui/icons-material/House';
import ArticleIcon from '@mui/icons-material/Article';
import PreviewIcon from '@mui/icons-material/Preview';
import ContactsIcon from '@mui/icons-material/Contacts';

const tabs = [
  {
    id: 'Newsletter Options',
    subcategories: [
      { id: 'Write articles', icon: <ArticleIcon />, link: '/write' },
      { id: 'Create new Template', icon: <ArticleIcon />, link: '/create' },
      { id: 'Edit Template', icon: <ArticleIcon />, link: '/create' },
      { id: 'Preview Template', icon: <PreviewIcon />, link: '/create' },
      { id: 'Send Template for approval', icon: <ArticleIcon />, link: '/create' },
      { id: 'Check approval status', icon: <ContactsIcon />, link: '/create' }
    ]
  },
  {
    id: 'Request New Event',
    subcategories: [
      { id: 'Request Event form', icon: <ArticleIcon />, link: '/eventRequest' },
      { id: 'Check Event Approval Status', icon: <ArticleIcon />, link: '/create' },
      { id: 'Cancel Event Request', icon: <ArticleIcon />, link: '/create' },
      { id: 'Prior Events', icon: <ArticleIcon />, link: '/create' }
    ]
  },
  {
    id: 'Contacts',
    subcategories: [
      { id: 'Contact Property Management company', icon: <ArticleIcon />, link: '/create' },
      { id: 'Contact Information for third party', icon: <ArticleIcon />, link: '/create' },
      { id: 'Need Assistance?', icon: <ArticleIcon />, link: '/create' }
    ]
  }
];

const itm = {
  py: '2px',
  px: '3px',
  '&:hover, &:focus': {}
};

const ItmBox = {
  boxShadow: '0 -1px 0 rgb(255, 255, 255, 0.1) inset',
  py: '1.5px',
  px: '3px'
};

const drawerWidth = 300;

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'black',
          width: drawerWidth
        }
      }
    }
  }
});

const Sidebar_Navigation = (props: DrawerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" anchor="left" sx={{ flexShrink: 0 }} classes={{ paper: 'drawer' }}>
        <Box>
          <div className="drawer-paper">
            <List disablePadding sx={{ bgcolor: '#575F66' }}>
              <ListItem sx={{ ...itm, ...ItmBox, fontSize: '15px' }}>
                <b style={{ textAlign:'center', paddingLeft: '15px', fontSize: '30px', fontFamily: 'cursive', color:'Ivory' }}>Eventful Edge LLC</b> 
              </ListItem>

              <ListItem sx={{ ...itm, ...ItmBox }}>
                <ListItemIcon>
                  <a href="/" style={{color: 'black'}}>
                    <HouseIcon />
                  </a>
                </ListItemIcon>
                <ListItemText>Template Dashboard</ListItemText>
              </ListItem>

              {tabs.map(({ id, subcategories }) => (
                <Box key={id} sx={{ bgcolor: 'darkcyan' }}>
                  <ListItem sx={{ px: '4px', py: '2px' }}>
                    <ListItemText sx={{ color: 'white' }}>{id}</ListItemText>
                  </ListItem>

                  {subcategories.map(({ id, icon, link }) => (
                    <ListItem disablePadding key={id} sx={{ bgcolor: 'gray' }}>
                      <Button component={Link} to={link} sx={{ ...itm }}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}>{id}</ListItemText>
                      </Button>
                    </ListItem>
                  ))}

                  <Divider sx={{ mt: '3px' }} />
                </Box>
              ))}
            </List>
          </div>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar_Navigation;
