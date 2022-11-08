import React, { useState } from 'react'
import { useMediaQuery, useTheme, Grid, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Drawer from './DrawerComp'
import { Link } from 'react-router-dom';
const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  const [value, setValue] = useState(0);


  return (
    <div>
      <AppBar sx={{ backgroundImage: 'linear-gradient(90deg, rgba(219,219,231,1) 35%, rgba(219,225,226,1) 100%);' }}>
        <Toolbar>
          {isMatch ? <><Typography>
            <img src="logo512.png" alt="logo" height={50} width={190} />
          </Typography><Drawer links={links}/></>
            : <Grid sx={{ placeItems: 'center' }} container>
              <Grid item xs={3}>
                <Typography>
                  <img src="logo512.png" alt="logo" height={50} width={190} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  indicatorColor={'secondary'}
                  textColor={'secondary'}
                  value={value}
                  onChange={(e, value) => setValue(value)} >
                  {links.map((link, index) => (
                    <Tab key={index} label={link} component={Link} to={`/${link}`}/>

                  ))}

                </Tabs>
              </Grid>
            </Grid>}

        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar
