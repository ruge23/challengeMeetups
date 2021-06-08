//**ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
//**styles
import { styles } from './styles'

const TotalBeersCard = ({ tempMin, tempMax, icon, total}) => {
  const classes = styles();
  return(
    <Card className={classes.content}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          title="Paella dish"
        />
        <Typography component="h2" variant="h5">
          Total de packs : {total}
        </Typography>
      </CardContent>
    </Card>
  )
}

export {TotalBeersCard}