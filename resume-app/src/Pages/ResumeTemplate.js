import React, { useState } from 'react'
import ResumeText from '../Components/ResumeText'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Link, Button, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar'
import Template4 from '../assets/Template4.jpg'
import Template2 from '../assets/Template2.jpg'
import Template3 from '../assets/Template3.jpg'
import Template5 from '../assets/Template5.png'
const linksArray = ["Home", "Resume Template", "My Resume", "About Us"]


function ResumeTemplate() {
  // const[popup,setPopup]=useState(false);


  // const handleClickOpen = () => {
  //   setPopup(!popup);
  // };


  return (

    <div>

      <Navbar links={linksArray} />
      <Grid container sx={{ paddingTop: '100px' }}>
        <Grid item xs={12}>
          <Card sx={{ display: 'flex' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  TEMPLATES
                </Typography><br />
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  SELECT A TEMPLATES TO GET STARTED
                </Typography>

              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <div style={{ display: 'flex' }}>
        <Card style={{ marginLeft: 5, marginRight: 5, flex: 1 }}>
          <CardHeader
            title="GREY TEMPLATE"
            subtitle="Updated 5/11"

          /><img src={Template3} alt="Live from space album cover" width={600} height={700}></img>
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>Use Now</Button>

        </Card>
        <Card style={{ marginRight: 5, flex: 1 }}>
          <CardHeader
            title="RED TEMPLATE"
            subtitle="Updated 5/11"
          /><img src={Template4} alt="Live from space album cover" width={600} height={700}></img>
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>Use Now</Button>
          <ResumeText />
        </Card>
      </div>
      <div style={{ display: 'flex' }}>
        <Card style={{ marginLeft: 5, marginRight: 5, flex: 1 }}>
          <CardHeader
            title="SKY TEMPLATE"
            subtitle="Updated 5/11"

          /><img src={Template5} alt="Live from space album cover" width={600} height={700}></img>
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>Use Now</Button>
        </Card>
        <Card style={{ marginRight: 5, flex: 1 }}>
          <CardHeader
            title="BLUE TEMPLATE"
            subtitle="Updated 5/11"

          /><img src={Template2} alt="Live from space album cover" width={600} height={700}></img>

          <Button component={Link} href={'Resume Template/DetailsFilling'}
            to='/Resume Template/DetailsFilling' variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>Use Now</Button>

        </Card>
      </div>
      {/* {popup?<div>
        <VerticalTabs/>
      </div>:''} */}

    </div>
  )
}

export default ResumeTemplate

