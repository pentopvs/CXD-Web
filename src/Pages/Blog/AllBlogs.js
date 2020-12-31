import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "../../Api";
import HomeBlogCard from "./HomeBlogCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MetaTags from 'react-meta-tags';
import Logo from '../../assets/Home/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AllBlogs() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const classes = useStyles();

  const fetchBlogs = () => {
    getBlogs()
      .then((res) => {
        if (res.success) {
          setdata(res.blogs);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setloading(false));
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="pt-3">
      <MetaTags>
        <title>Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer</title>
        <meta name="description" content="More than Customer Journey Map, the team behind CXDeployer, share their insights around experience design and research. Get access to exclusive resources from Industry Experience ..." />
        <meta property="og:title" content="Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer" />
        <meta property="og:image" content={Logo} />
      </MetaTags>

      <div className="container">
        <div className="container font-weight-bolder ml-4 text-left mb-3">
          <h1>All Blogs</h1>
        </div>
        {loading ? (
          <div className="row mt-5 text-center align-content-center d-flex justify-content-center">
            <div
              className="spinner-grow text-primary"
              style={{ height: "100px", width: "100px" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
              <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12}   direction="row"
  justify="space-around"
  alignItems="center" className="mx-auto">
            {/* <div className="row mt-5"> */}
            {data.map((blog) => {
              var title = blog.title.split(" ").join("-");
              console.log("blog : ", blog);
              return (                
                  <HomeBlogCard blog={blog} />
              )
            })}
            {/* </div> */}
          </Grid>
          </Grid>
    </div>

        )}
      </div>
    </div>
  );
}
