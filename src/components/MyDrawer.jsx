import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {TbArrowsUpDown} from "react-icons/tb";
import { Paper } from '@mui/material';







export default function TemporaryDrawer({handleSort}) {
  // const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1>Sort By</h1>
      <Divider />
      <List >
          <ListItem disablePadding>
                <ListItemButton onClick={()=> handleSort('created_at')}>
                <ListItemText primary='Date' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=> handleSort('comment_count')}>
                <ListItemText primary='Comment Count'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=> handleSort('votes')}>
                <ListItemText primary='Votes' />
                </ListItemButton>
            </ListItem>
       
      </List>
    </Box>
  );

 









  const anchor = 'left'
  return (
    <div className='button-box'>
      
        <React.Fragment key={anchor}>
          <button className='sort-btn' onClick={toggleDrawer(anchor, true)}>
          <TbArrowsUpDown />Sort By</button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            //  classes={{ paper: classes.paper }}
           
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      
    </div>
  );
}
