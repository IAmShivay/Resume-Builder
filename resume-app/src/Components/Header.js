import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function Header() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card sx={{ display: 'flex' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Resume Builder
                            </Typography><br />
                            <Card>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    A resume builder is an online tool that you can use to quickly create a resume. Resume builders allow you to pick a pre-formatted resume template, fill in your contact and background information, and select pre-written work history bullet points — saving you a lot of time.
                                    However, not all resume builders are created equal. Pick a high-quality resume builder that’s easy to use, includes a good selection of professional templates, and provides bullet points tailored to your needs so you can best demonstrate your previous achievements in context.
                                    Our free resume builder lets you easily and quickly create a resume using our resume wizard. Robust Text Editor. Our text editor has everything you need to customize your resume. Choose different fonts, sizes, bullets and much more. Download your resume as PDF. Download your resume and send it straight to the hiring manager. Our Resumes Are Easily Customizable and Downloadable. Adding a personal touch to your resume couldn't be simpler with our resume builder.Whether you want to change your resume's font, text size, header size, or add or delete sections, our resume builder has you covered.
                                </Typography>
                            </Card>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                    <img src="PoetryAmico.png" alt="Live from space album cover" width={450} height={450} />
                </Card>
            </Grid>
        </Grid>
    );
}


export default Header;