//**ui
import { useForm, Controller } from "react-hook-form";
import {
  Paper,
  Button,
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
//**styles
import { styles } from './styles'
//**hooks
import { useLogin } from '../../hooks' 


const Login = () => {
  const classes = styles();
  const { getLogin } = useLogin();
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.email) getLogin(data)
    console.log(data);
  }
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={3} >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.formContetn} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField autoFocus type="text" fullWidth placeholder="example@exaple.com" {...field} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField type="password" fullWidth placeholder="*********" {...field} />}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresar
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}

export { Login }