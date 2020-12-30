import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    console.log(props.blog);
    setBlog(props.blog);
  }, [props.blog]);
  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {blog.title}
        </Typography>*/}
        <Typography variant="h5" component="h2">
          {blog.title}
        </Typography>
        {/*<Typography className={classes.pos} color="textSecondary">
          adjective
    </Typography>*/}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => props.redirect(blog._id, blog.title)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
