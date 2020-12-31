import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "../../Api";
import HomeBlogCard from "./HomeBlogCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
  document.title =
    "Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer";
  return (
    <div className="pt-3">
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
                <>
                  {/* <div class="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        {blog.title}
                        <sub className="d-flex justify-content-end p-1">
                          - {blog.uploadDate.split("T")[0]}
                        </sub>
                      </h3>
                      <div
                        className="card-text"
                        style={{
                          height: 150,
                          overflowY: "scroll",
                          marginTop: 10,
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: blog.blog_content,
                          }}
                        />
                      </div>
                    </div>
                    <Link
                      className="btn btn-dark"
                      to={{
                        pathname: `/blog/${title}`,
                        blog: blog,
                      }}
                      onClick={() => localStorage.setItem("blogId", blog._id)}
                    >
                      Read this article
                    </Link>
                  </div>
                </div> */}
                  <HomeBlogCard blog={blog} />
                  </>
              );
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
