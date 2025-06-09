import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Wrapper from './Wrapper';

function CounterPage() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="h4" component="h1" gutterBottom
          sx={{
            fontFamily: ' serif',
            fontWeight: '',
            letterSpacing: 0.05,
            color: 'primary.main',
            textTransform: 'uppercase',
          }}>
          Counter Dashboard
        </Typography>
      </Box>

      {/* Counter Cards will be center-aligned in Wrapper now */}
      <Wrapper />
    </Container>
  );
}

export default CounterPage;
