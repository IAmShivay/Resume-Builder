import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
function KeySkill() {
    return (
        <div>
            <>
                <Box
                    component="form"
                    sx={{
                        paddingLeft: '158px', paddingRight: '100px', paddingBottom: '100px', paddingTop: '2px',
                        width: 493,
                        maxWidth: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                ><Typography component="div" variant="h5" className=''>
                        <span style={{ fontWeight: 650 }}>KEY SKILLS</span>
                    </Typography><hr size={2}></hr><br />
                    <div
                        className=''
                        noValidate
                        autoComplete="off"
                      >
                        <TextField fullWidth
                            required
                            id="outlined-multiline-static"
                            label="Objective"
                            multiline
                            rows={10}
                            defaultValue=''
                            
                        /></div>
                    <div>
                        <Box
                            m={1}
                            margin
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>
                                Save
                            </Button>
                            <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>
                                Genrate Resume
                            </Button>
                        </Box>
                    </div>
                </Box>
            </>
        </div>
    )
}

export default KeySkill
