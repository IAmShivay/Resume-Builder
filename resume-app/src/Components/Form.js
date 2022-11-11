import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Card} from '@mui/material';
import TextComponent from './Professional'
import WorkExpInfo from '../Components/WorkExpInfo'
import EducationInfo from './EducationInfo';
import KeySkill from './KeySkill';



function TabPanel(Props) {
  const { children, value, index, ...other } = Props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Card>{children}</Card>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >

      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Personal Info" {...a11yProps(0)} />
        <Tab label="Work Experience" {...a11yProps(1)} />
        <Tab label="Education"  {...a11yProps(2)} />
        <Tab label="Key Skill"  {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <TextComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkExpInfo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EducationInfo />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <KeySkill />
      </TabPanel>

    </Box>
  );
}