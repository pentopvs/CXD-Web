import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "../../Api";
import { Link } from "react-router-dom";

export default function AllBlogs() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

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
    <div className="pt-5">
      <div className="container">
        <div className="container text-center">
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
          <div className="row mt-5">
            {data.map((blog) => {
              var title = blog.title.split(" ").join("-");

              return (
                <div class="col-md-6">
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
