/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import questions from '../assets/formQuestions';

const classes = {
  formControl: {
    mb: 2,
  },
};

const valueOptions = [
  'Per niente',
  'Poco',
  'Abbastanza',
  'Molto',
];

function FormPage(props) {
  const { setShowResults } = props;

  const [ready, setReady] = useState(false);
  const [name, setName] = useState('');
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [results, setResults] = useState({
    A1: {},
    A2: {},
    A3: {},
    A4: {},
    B1: {},
    B2: {},
    C1: {},
    C2: {},
  });

  useEffect(() => {
    // shuffle questions
    questions.sort(() => Math.random() - 0.5);

    setShuffledQuestions(questions);
    setReady(true);
  }, []);

  const calculateResults = () => {
    console.log(results);
    setShowResults(true);
  };

  const handleResponse = ({ id, subArea, value }) => {
    if (!id || !subArea) {
      return;
    }
    results[subArea][id] = value;
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
        <TextField
          required
          variant="outlined"
          label="Nome e Cognome"
          size="small"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          sx={{ mb: 2 }}
        />

        {shuffledQuestions.map(({ subArea, id, text }) => (
          <FormControl required sx={classes.formControl} key={id}>
            <FormLabel id="form-question-1">
              {text}
            </FormLabel>
            <RadioGroup
              aria-labelledby="form-question-1"
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
