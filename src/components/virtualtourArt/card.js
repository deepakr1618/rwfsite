import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({image,heading,text}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <img src={image} height="270px" style={{padding:"10px"}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}