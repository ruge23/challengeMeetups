import {useEffect} from 'react'
//**ui
// import Button from '@material-ui/core/Button';
import {
  Paper,
  Grid,
  Typography,
  CardMedia } from '@material-ui/core'
//**styles
import {styles} from './styles'
//**components
// import { TotalBeersCard} from '../../components';
//**hooks
import { useMeetupList } from '../../hooks'

const MeetupList = () => {
  const classes = styles();
  const { getWeather,weatherLatLng } = useMeetupList();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      if(!weatherLatLng) getWeather(position.coords.latitude, position.coords.longitude)
      // getWeather(position.coords.latitude,position.coords.longitude)
    });
  }, [getWeather])
  return(
    <Grid item xs={12}>
      <div>
        <Paper className={classes.paper} elevation={5}>
          {weatherLatLng && (
            <div>
              <img src={`http://openweathermap.org/img/wn/${weatherLatLng?.weather[0]?.icon}@2x.png`} alt="weather icon" />
            </div>
          )}
          <Typography>
            {`Temp Min: ${Math.ceil(weatherLatLng?.main?.temp_min)}°C Temp Max: ${Math.ceil(weatherLatLng?.main?.temp_max)}°C`}
         </Typography>
        </Paper>
      </div>
      <Paper className={classes.paper} elevation={3} >
        <Typography component="h1" variant="h5">
          LISTA DE MEETUPS
        </Typography>
      </Paper>
    </Grid>
  )
}

export {MeetupList}