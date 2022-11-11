import React from 'react'
import Box from '@mui/material/Box';
import { Button,TextField, Card, CardContent, Typography } from '@mui/material';
import Date from '../../src/Components/Date'

function WorkExpInfo() {
    return (
        <div>
            <>
                <Box
                    component="form"
                    sx={{
                        paddingLeft: '150px', paddingRight: '100px', paddingTop: '100px', paddingBottom: '30px',
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                ><Typography component="div" variant="h5">
                        <span style={{ fontWeight: 650 }}>WORK EXPERIENCE</span>

                    </Typography><hr size={2}></hr><br />
                    <div>
                        <TextField
                            sx={{ paddingRight: '45px' }}
                            required
                            id="Job Title"
                            label="Job Title"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="Organisation Name"
                            label="Organisation Name"
                            defaultValue=""
                        />
                      
                      <TextField
                            sx={{ paddingRight: '45px' }}
                            required
                            id="Starting Date"
                            label="Starting Date"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="End Date"
                            label="End Date"
                            defaultValue=""
                        />
                    </div>
                    <div>    <Box
          m={1}
          margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"

        >
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>
            Add New
          </Button>
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>
            Save
          </Button>
        </Box></div>
                    


                </Box>


            </>
        </div>
    )
}

export default WorkExpInfo
