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

export default function AddModerator (){
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    size : '',
    type :'',
    department:'',
    Id:'',
    Number:'',
    Email:'',
    Age :18,
    Location : 0,
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
            Add Moderator
          </Typography>
          <TextField id="department" label="department" className={classes.textField} value={values.department} onChange={handleChange('department')} margin="normal"/><br/>
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField id="Age" type="number" label="Age" className={classes.textField} value={values.Age} onChange={handleChange('Age')} margin="normal"/><br/>
          <TextField id="Location" type="number" label="Location" className={classes.textField} value={values.Location} onChange={handleChange('Location')} margin="normal"/><br/>
          <TextField id="Id" label="Id" className={classes.textField} value={values.Id} onChange={handleChange('Id')} margin="normal"/><br/>
          <TextField id="Email" type="email" label="Email" className={classes.textField} value={values.Email} onChange={handleChange('Email')} margin="normal"/><br/>
          <TextField id="Phone" label="Phone" className={classes.textField} value={values.Phone} onChange={handleChange('Phone')} margin="normal"/><br/>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" className={classes.submit}>Submit</Button>
        </CardActions>       
      </Card>
    </div>)
}