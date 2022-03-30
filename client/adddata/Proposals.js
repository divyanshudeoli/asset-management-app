import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: theme.spacing(3)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  media: {
    minHeight: 330
  }
}))
export default function Newsfeed () {
  const classes = useStyles()
    return (
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Proposals
        </Typography>
        <Divider/>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
              All the listed proposals are displayed here 
        </Typography>
      </Card>
    )
}