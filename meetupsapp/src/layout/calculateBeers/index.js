//**ui
import { useForm, Controller } from "react-hook-form";
import {
  Paper,
  Button,
  Grid,
  Typography,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import RoomIcon from '@material-ui/icons/Room';
//**styles
import {styles} from './styles'
//**components
import { TotalBeersCard} from '../../components';
//**hooks
import { useCalculateBeers } from '../../hooks'

const CalculateBeers = () => {
  const classes = styles();
  const { getWeather, totalBoxBeers } = useCalculateBeers();
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.weatherCity) getWeather(data)
    // console.log(data);
  }
  return(
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={3} >
        <Typography component="h1" variant="h5">
          CÁLCULO DE CERVEZAS
        </Typography>
        <form className={classes.formContetn} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="totalPublic"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <GroupIcon />
                    </InputAdornment>
                  ),
                }} autoFocus type="number" fullWidth placeholder="Ingresa el total de participantes" {...field} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="weatherCity"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }} fullWidth placeholder="Ciudad a relizar el evento" {...field} />}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              CALCULAR
            </Button>
            {totalBoxBeers > 0 && (
              <Grid item xs={12} className={styles.contentTotalCard}>
                <TotalBeersCard
                  // dt={1602104400 * 1000}
                  total={totalBoxBeers}
                  tempMin="22.67"
                  tempMax="24.39"
                  // main="Clear"
                  icon="01d"
                />
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}

export {CalculateBeers}