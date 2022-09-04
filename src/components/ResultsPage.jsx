/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';

function ResultsPage(props) {
  const { results, restartForm } = props;

  useEffect(() => {
  }, [results]);

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        textAlign="center"
        fontWeight="600"
        sx={{ my: 2 }}
      >
        Risultati
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I modi di studiare e di imparare sono diversi da persona a persona, ma possono essere
        riassunti in alcune grandi categorie.
      </Typography>

      <Typography variant="h6" component="h3" sx={{ mt: 2, lineHeight: '1em' }}>
        Area A: visivo verbale, visivo non verbale, uditivo o cinestetico
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Si tratta dei canali sensoriali attraverso cui percepiamo il mondo esterno.
        Le persone con preferenza visiva verbale imparano meglio leggendo; quelle con preferenza
        visiva non verbale guardando figure, diagrammi, ecc.; quelle con preferenza uditiva
        ascoltando; quelle con preferenza cinestetica facendo esperienza diretta delle cose.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Visivo Verbale"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.A1.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Visivo Non Verbale"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.A2.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Uditivo"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.A3.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Cinestetico"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.A4.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h6" component="h3" sx={{ mt: 8, lineHeight: '1em' }}>
        Area B: analitico o globale
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Si tratta dei modi di elaborareleinformazioni. Le persone con preferenza analitica tendono
        a preferire il ragionamento logico e sistematico, basato su fatti e dettagli; quelle con
        preferenza globale tendono a considerare le situazioni in modo sintetico, basandosi
        sull&apos;intuito e sugli aspetti generali di un problema.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Analitico"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.B1.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Globale"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.B2.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h6" component="h3" sx={{ mt: 8, lineHeight: '1em' }}>
        Area C: individuale o di gruppo
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Si tratta della preferenza verso il lavoro individuale o verso il lavoro con gli altri.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Individuale"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.C1.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '150px' }}>
            <CardHeader
              title="Stile Di Gruppo"
              titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
            />
            <CardContent>
              <Typography variant="body1" textAlign="center">
                {results.C2.percentage || 0}
                %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={restartForm}
        sx={{ mt: 4 }}
      >
        Ricomincia il Questionario
      </Button>
    </>
  );
}

export default ResultsPage;
