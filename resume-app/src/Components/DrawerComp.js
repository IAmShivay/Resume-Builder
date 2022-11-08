import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
function DrawerComp({ links }) {
    const [open, setOpen] = useState(false)
    return (

        <>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {links.map((link, index) => (
                        <ListItemButton onClick={() => setOpen(false)} key={index} divider component={Link} to={`/${link}`}>
                            <ListItemIcon>
                                <ListItemText>
                                    {link}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>))}
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: 'Auto', color: 'Red' }} onClick={() => setOpen(true)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComp
