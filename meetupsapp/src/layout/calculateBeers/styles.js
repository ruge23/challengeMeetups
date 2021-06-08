import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  content : {
    // margin:20,
  },
  formContetn:{
    width: '100%', // Fix IE 11 issue.
    display:'flex',
    flex:1,
    flexDirection:'column'
  },
  paper: {
    margin: theme.spacing(2),
    borderRadius:10,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  contentTotalCard:{
    textAlign:'center'
  }
}))

export {styles}