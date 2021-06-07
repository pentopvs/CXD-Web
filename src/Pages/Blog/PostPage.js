import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { getBlogs, urlHelperImage } from "../../Api";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import RecommCard from "./recommblogs";
import MetaTags from "react-meta-tags";
import MetaTagsServer from "react-meta-tags/server";
import { MetaTagsContext } from "react-meta-tags";
import {Helmet} from "react-helmet";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));
function PostPage(props) {
  // if (!props.location.blog) {
  //   props.history.push("/blogs");
  // }
  const classes = useStyles();

  const [post, setPost] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [data, setdata] = useState([]);
  const [inviBlogData, setInviBlogData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [recommpost, setRecommpost] = useState([]);
  const { title } = useParams();
  const fetchBlogsById = async () => {
    let newTitle = title.split("-").join(" ");
    let blogbyid = await axios.get(
      `https://app.cxdeployer.com/api/admin/blog/get/blog/${newTitle}`
    );
    setInviBlogData(blogbyid.data.result);
  };
  console.log("BLOGDATA", inviBlogData);

  const fetchBlogs = () => {
    let tags = [];
    getBlogs()
      .then((res) => {
        if (res.success) {
          console.log(res.blogs);
          setdata(res.blogs);
          for (var i = 0; i < res.blogs.length; i++) {
            if (localStorage.getItem("blogId") == res.blogs[i]._id) {
              setPost(res.blogs[i]);
              tags = res.blogs[i].tags;
            }
          }
        }
      })
      .catch((error) => console.log(error));
    axios
      .get(`https://app.cxdeployer.com/api/admin/blog/${tags}`)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setRecommpost(res.data.blogs);
        }
      });
  };
  const recommRedirect = (id, title) => {
    var blog_title = title.split(" ").join("-");
    localStorage.setItem("blogId", id);
    // props.history.push("/blog/" + blog_title);
    props.history.push(`/blog/${blog_title}`);
    window.location.reload();
  };

  const onEnterSearch = (value) => {
    console.log(value);
    for (var i = 0; i < data.length; i++) {
      if (value == data[i].title) {
        var blog_title = data[i].title.split(" ").join("-");
        localStorage.setItem("blogId", data[i]._id);
        props.history.push("/blog/" + blog_title);
        window.location.reload();
      }
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    fetchBlogs();
    fetchBlogsById();
    // setPost(props.location.blog);
  }, []);
  var blogUrl = ''
  try{
    blogUrl = inviBlogData.title.split(" ").join("-")   
    // blogUrl = post.title.split(" ").join("-")   
  }
  catch(err) {
    console.log("Error : ",err)
  }
  return (
    <div>
      <div className="postPage pt-5" style={{ width: "80%", margin: "3rem auto" }}>
        <MetaTags>
          {/* <title>Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer</title> */}
          {/* <title>{post.title}</title> */}
          <title>{inviBlogData.title}</title>
          {/* <img src={`https://app.cxdeployer.com/user/${post.titleImage}`} alt=""/> */}
          {/* <link rel="icon" type="image/png" sizes="32x32" href={`https://app.cxdeployer.com/user/${post.titleImage}`} /> */}
          <meta
            name="title"
            // content={post.title}
            content={inviBlogData.title}
          />
          {/* <meta property="og:image" content={`https://app.cxdeployer.com/user/${post.titleImage}`} /> */}
          <meta
            property="og:image"
            content={`https://app.cxdeployer.com/user/${inviBlogData.titleImage}`}
          />
          {/* <meta
            name="image"
            content={`${urlHelperImage}/${post.titleImage}`}
          /> */}

          {/* <meta name="description" content={post.description} /> */}
          <meta name="description" content={inviBlogData.description} />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={inviBlogData.title}
          />
          {/* <meta property="og:title" content={post.description} /> */}
          <meta property="og:title" content={inviBlogData.title} />
          <meta
            property="og:image"
            // content={`https://app.cxdeployer.com/user/${post.titleImage}`}
            content={`https://app.cxdeployer.com/user/${inviBlogData.titleImage}`}
          />
          <meta
            property="og:url"
            content={`https://cxdeployer.com/blog/${blogUrl}`}
          />

          {/* <!-- Twitter -- /> */}
          <meta property="twitter:card" content="Blog" />
          <meta
            property="twitter:url"
            content={`https://cxdeployer.com/blog/${blogUrl}`}
          />
          {/* <meta property="twitter:title" content={post.description} /> */}
          <meta property="twitter:title" content={inviBlogData.description} />
          <meta
            property="twitter:description"
            content="Blogs | Persona | Empathy | Value | Journey Mapping | Innovation | Kanban | CXDeployer"
          />
          <meta
            property="twitter:image"
            // content={`https://app.cxdeployer.com/user/${post.titleImage}`}
            content={`https://app.cxdeployer.com/user/${inviBlogData.titleImage}`}
          />
        </MetaTags>

        <br />
        <div class="container">
          <div class="row ">
            <div class="col-sm-8 left-container">
              {" "}
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
              ></div>
              {/* <div dangerouslySetInnerHTML={{ __html: post.blog_content }} /> */}
              <div
                dangerouslySetInnerHTML={{ __html: inviBlogData.blog_content }}
              />
            </div>
            <div class="col-sm-4 right-conatainer">
              <div class="sidebar">
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={searchText}
                  onInputChange={(event, newInputValue) => {
                    setSearchText(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={data.map((option) => option.title)}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="outlined-search-help"
                      label="Search"
                      variant="outlined"
                      autoComplete="off"
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          onEnterSearch(value);
                        }
                      }}
                    />
                  )}
                />

                <h4 className="mt-4">Join our newsletter :</h4>

                <TextField
                  id="standard-name"
                  label="Email"
                  value={email}
                  onChange={handleChange}
                />
                <br></br>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mt-3 px-5 btn btn-light rounded-pill"
                >
                  <font color="black ">Subscribe</font>
                </a>

                <h4 className="mt-4">Tags :</h4>
                <div className={classes.root}>
                  {inviBlogData.tags && inviBlogData.tags.length != 0 ? (
                    inviBlogData.tags.map((tag) => {
                      return <Chip label={tag} />;
                    })
                  ) : (
                    <blockquote class="blockquote mt-2 pl-2">
                      <p class="mb-0">No related tags</p>
                    </blockquote>
                  )}
                  {/* {post.tags && post.tags.length != 0 ? (
                    post.tags.map((tag) => {
                      return <Chip label={tag} />;
                    })
                  ) : (
                    <blockquote class="blockquote mt-2 pl-2">
                      <p class="mb-0">No related tags</p>
                    </blockquote>
                  )} */}
                </div>
                <h4 className="mt-4">Recommended Posts :</h4>
                <div className="mt-2">
                  {recommpost.length > 0 ? (
                    recommpost.map((post, index) => {
                      if (index < 3)
                        return (
                          <RecommCard blog={post} redirect={recommRedirect} />
                        );
                    })
                  ) : (
                    <blockquote class="blockquote mt-2 pl-2">
                      <p class="mb-0">No related posts</p>
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;