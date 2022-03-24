import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function AddAssets (){
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    size : '',
    type :'',
    authority:'',
    available:false,
    year :1800,
    maintenane : 0,
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Add Asset
          </Typography>
          <TextField id="authority" label="authority" className={classes.textField} value={values.authority} onChange={handleChange('authority')} margin="normal"/><br/>
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField id="year" type="number" label="year" className={classes.textField} value={values.year} onChange={handleChange('year')} margin="normal"/><br/>
          <TextField id="maintenance" type="number" label="maintenance" className={classes.textField} value={values.maintenane} onChange={handleChange('maintenance')} margin="normal"/><br/>
          <TextField id="availbility" label="availbility" className={classes.textField} value={values.availbility} onChange={handleChange('availbility')} margin="normal"/><br/>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" className={classes.submit}>Submit</Button>
        </CardActions>       
      </Card>
    </div>)
}