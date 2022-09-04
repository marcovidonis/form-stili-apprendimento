/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { Button } from '@mui/material';

function ResultsPage(props) {
  const { results, setShowResults } = props;

  useEffect(() => {
  }, [results]);

  return (
    <>
      <h1>This is the results page</h1>
      <Button variant="contained" color="primary" onClick={() => setShowResults(false)}>Go Back</Button>
    </>
  );
}

export default ResultsPage;
