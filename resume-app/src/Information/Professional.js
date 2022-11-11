import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function TextComponent() {
  

  return (
    <>
      <Box
        component="form"
        sx={{
          paddingLeft: '150px', paddingRight: '100px', paddingTop: '100px', paddingBottom: '30px',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      ><Typography component="div" variant="h5" className=''>
          <span style={{ fontWeight: 650 }}>PERSONAL INFORMATION</span>

        </Typography><hr size={2}></hr><br />
        <div>
          <TextField
            sx={{ paddingRight: '45px' }}
            required
            id="First name"
            label="First name"
            defaultValue=''
           
          />
          <TextField
            required
            id="Last name"
            label="Last name"
            defaultValue=''
            
          />

        </div>
        <div><TextField
          sx={{ paddingRight: '45px' }}
          required
          id="State"
          label="State"
          defaultValue='{content.header.state}'
          
        />
          <TextField
            sx={{ paddingRight: '45px' }}
            required
            id="City"
            label="City"
            defaultValue='{content.header.city}'
            
            /></div>
        <div>
          <TextField
            sx={{ paddingRight: '45px' }}
            required
            id="E-mail"
            label="E-mail"
            defaultValue='{content.header.email}'
            
          />
          <TextField
            required
            id="Mobile"
            label="Mobile"
            defaultValue='{content.header.phone}'
           
          />

        </div>
        <div>
          <TextField
            sx={{ paddingRight: '45px' }}
            required
            id="PostalCode"
            label="PostalCode"
            defaultValue='{content.header.zip}'
            />
        </div>

      </Box>
      <Box
        sx={{
          paddingLeft: '158px', paddingRight: '100px', paddingBottom: '100px', paddingTop: '2px',
          width: 493,
          maxWidth: '100%',

        }}
      >
        <TextField fullWidth label="Address" id="Address" required />

      </Box>
      <Box
        component="form"
        sx={{
          paddingLeft: '158px', paddingRight: '100px', paddingBottom: '100px', paddingTop: '2px',
          width: 493,
          maxWidth: '100%',

        }}
        noValidate
        autoComplete="off"
      ><TextField fullWidth
        required
        id="outlined-multiline-static"
        label="Objective"
        multiline
        rows={10}
        defaultValue=""
        />
      </Box>
      <hr width={775} />
      <div>
        <Box
          m={1}
          margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"

        >
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>
            Next
          </Button>
          <Button variant="contained" color="primary" sx={{ margin: '5px', height: 40 }}>
            Next
          </Button>
        </Box>
      </div>

    </>
  );
}