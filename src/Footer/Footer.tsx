import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const StyledFooter = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

export default function Footer() {
    return (
        <StyledFooter>
            <Box sx={{ fontSize: 18, paddingTop: '3px' }}>
                <CopyrightIcon />
            </Box>
            <span>2023 Name of Company</span>
        </StyledFooter>
    );
}
