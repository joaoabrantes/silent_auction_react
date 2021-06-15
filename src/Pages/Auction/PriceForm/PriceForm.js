import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography id="discrete-slider" gutterBottom>
        Price per person
      </Typography>
      <Grid container spacing={3}>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          min={10}
          max={110}
        />
      </Grid>
    </React.Fragment>
  );
}