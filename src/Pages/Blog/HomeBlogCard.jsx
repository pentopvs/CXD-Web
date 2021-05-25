import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  blogCard: {
    "&:hover": {
      boxShadow:
        "8px 0 15px -8px rgba(31, 73, 125, 0.8), -8px 0 8px -8px rgba(31, 73, 125, 0.8)",
      marginTop: "-10px !important",
    },
  },
  blogDate: {
    fontWeight: "700",
    fontSize: "20px",
    color: "rgb(0,0,0,0.3)",
  },
  blogTitle: {
    fontWeight: "600",
    fontSize: "25px",
    lineHeight: "110%",
  },
  blogDesc: {
    maxHeight: "300px",
  },
}));

export default function HomeBlogCard({ blog }) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={5}
      lg={4}
      className={`${classes.blogCard} mx-4 my-3 rounded-lg`}
    >
      <Link
        to={{
          pathname: `/blog/${blog.title.split(" ").join("-")}`,
          blog: blog,
        }}
        onClick={() => localStorage.setItem("blogId", blog._id)}
      >
        <Grid item xs={12}>
          <img
            className="img-fluid  rounded-lg"
            alt="blog-image"
            src={`https://app.cxdeployer.com/user/${blog.titleImage}`}
          />
        </Grid>
        <Grid item xs={12} className={`${classes.blogDate} mt-4 mb-2 mx-3`}>
          {blog.uploadDate.split("T")[0]}
        </Grid>
        <Grid item xs={12} className={`${classes.blogTitle} mx-3 text-dark`}>
          {blog.title}
        </Grid>
        <Grid
          item
          xs={12}
          className={`${classes.blogDesc} mx-3 my-3 text-dark text-truncate`}
        >
          {blog.description}
        </Grid>
      </Link>
    </Grid>
  );
}
