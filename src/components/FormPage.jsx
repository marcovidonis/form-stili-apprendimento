/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import questions from '../assets/formQuestions';

const classes = {
  formControl: {
    mb: 2,
    width: '100%',
  },
};

const valueOptions = [
  'Per niente',
  'Poco',
  'Abbastanza',
  'Molto',
];

function FormPage(props) {
  const { setShowResults, results, setResults } = props;

  const [ready, setReady] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // shuffle questions
    questions.sort(() => Math.random() - 0.5);

    // TEST assign random answers
    // questions.forEach((qn) => {
    //   const testAnswer = Math.floor(Math.random() * 4);
    //   results[qn.subArea][qn.id] = testAnswer;
    // });
    // setResults(results);
    // console.log(results);
    // end of TEST

    setShuffledQuestions(questions);
    setReady(true);
  }, []);

  const calculateResults = () => {
    const areaTotals = {
      A: 0,
      B: 0,
      C: 0,
    };
    Object.entries(results).forEach(([subArea, answersObj]) => {
      const area = subArea.slice(0, 1);
      const subAreaTotal = Object.values(answersObj).reduce((prev, curr) => prev + curr);
      areaTotals[area] += subAreaTotal;
      results[subArea].total = subAreaTotal;
    });

    Object.keys(results).forEach((subArea) => {
      const { total: subAreaTotal } = results[subArea];
      const area = subArea.slice(0, 1);
      const areaTotal = areaTotals[area];
      results[subArea].percentage = areaTotal ? ((subAreaTotal / areaTotal) * 100).toFixed(1) : 0;
    });

    setShowResults(true);
    setResults(results);
  };

  const handleResponse = ({ id, subArea, value }) => {
    if (!id || !subArea) {
      return;
    }
    results[subArea][id] = parseInt(value, 10);
    setResults(results);
  };

  if (!ready) {
    return null;
  }

  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Le seguenti affermazioni descrivono alcune abitudini di studio e modi di imparare.
        Dai un giudizio da &quot;per niente&quot; a &quot;molto&quot; ad ogni affermazione
        per capire quali di queste si applicano nel tuo caso.
      </Typography>

      <form onSubmit={calculateResults}>
        {shuffledQuestions.map(({ subArea, id, text }, index) => (
          <FormControl required sx={classes.formControl} key={id}>
            <FormLabel id={`form-question-${id}`} sx={{ fontWeight: 500 }}>
              {`${index + 1}) ${text}`}
            </FormLabel>
            <RadioGroup
              aria-labelledby={`form-question-${id}`}
              // name="radio-buttons-group"
              value={results[subArea][id]}
              onChange={(ev) => handleResponse({
                id,
                subArea,
                value: ev.target.value,
              })}
            >
              {valueOptions.map((option, idx) => (
                <FormControlLabel
                  key={option}
                  value={idx}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          FINE
        </Button>
      </form>
    </>
  );
}

export default FormPage;
