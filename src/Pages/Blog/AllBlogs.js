import React, { useState, useEffect } from "react";
import { getBlogs } from "../../Api";
import HomeBlogCard from "./HomeBlogCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MetaTags from "react-meta-tags";
import MetaTagsServer from "react-meta-tags/server";
import { MetaTagsContext } from "react-meta-tags";
import Logo from '../../assets/Home/logo.png';
import {Helmet} from 'react-helmet';
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
    <div className="pt-5">
      <Helmet>
        <title>Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer</title>
            <meta name="title" content="Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer"/>
            <meta name="description" content="Manage CX transformation program and achieve customer experience excellence"/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Manage CX transformation program and achieve customer experience excellence." />
            <meta property="og:title" content="Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer" />
            <meta property="og:image" content={`https://cxdeployer.com${Logo}`} />
            <meta property="og:url" content="https://cxdeployer.com/blogs" />

            {/* <!-- Twitter -- /> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://cxdeployer.com/blogs" />
            <meta property="twitter:title" content="Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer" />
            <meta property="twitter:description" content="Manage CX transformation program and achieve customer experience excellence" />
            <meta property="twitter:image" content={`https://cxdeployer.com${Logo}`}   />


      </Helmet>

      <div className="container pt-5">
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
