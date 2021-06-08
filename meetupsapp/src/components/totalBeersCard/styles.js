import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  content:{
    width: '18rem',
    margin:'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

export { styles }