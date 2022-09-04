import React, { useState } from 'react';

import { Paper, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

// import './App.css';
import FormPage from './components/FormPage';
import ResultsPage from './components/ResultsPage';

let theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[600],
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

theme = responsiveFontSizes(theme, { breakpoints: ['xs', 'sm'] });

const initialResults = {
  A1: {},
  A2: {},
  A3: {},
  A4: {},
  B1: {},
  B2: {},
  C1: {},
  C2: {},
};

function App() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(initialResults);

  const restartForm = () => {
    setResults({ ...initialResults });
    setShowResults(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={2}
        sx={{
          m: 3, mx: 'auto', px: { xs: 4, sm: 8 }, py: 4, maxWidth: '700px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Questionario sugli stili di apprendimento
        </Typography>
        {showResults ? (
          <ResultsPage
            restartForm={restartForm}
            results={results}
          />
        ) : (
          <FormPage
            setShowResults={(value) => setShowResults(value)}
            setResults={(value) => setResults(value)}
            results={results}
          />
        )}
        <Typography variant="body2" sx={{ mt: 3 }}>
          Credit: Mariani Luciano, 2000, Zanichelli
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Made by
          {' '}
          <Typography
            variant="body2"
            component="a"
            href="https://marcovidonis.com"
            target="_blank"
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
            marcovidonis.com
          </Typography>
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
