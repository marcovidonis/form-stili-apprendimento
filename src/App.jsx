import React, { useState } from 'react';

import { Paper, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// import './App.css';
import FormPage from './components/FormPage';
import ResultsPage from './components/ResultsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
  },
  typography: {
    fontFamily: [
      'Avenir',
      'Inter',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} sx={{ m: 3, p: 3 }}>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Questionario sugli stili di apprendimento
        </Typography>
        {showResults ? (
          <ResultsPage setShowResults={(value) => setShowResults(value)} />
        ) : (
          <FormPage setShowResults={(value) => setShowResults(value)} />
        )}
        <Typography variant="body2" component="footer" sx={{ mt: 3 }}>
          Credit: Mariano Luciano, 2000, Zanichelli
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
