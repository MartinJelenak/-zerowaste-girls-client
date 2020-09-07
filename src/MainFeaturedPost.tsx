import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Blog_data } from "./__generated__/Blog_data.graphql";
import * as _ from "lodash";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

interface MainFeaturedPostProps {
  data: Blog_data;
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const classes = useStyles();
  const blogPosts: any = props.data.notes;
  let countOfPosts: number = _.size(blogPosts) - 1;
  // console.log("test");
  console.log("toto je ID " + blogPosts[_.size(blogPosts) - 1]._id);

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
    >
      {
        <img
          style={{ display: "none" }}
          src="https://source.unsplash.com/random"
          alt="main image description"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {blogPosts[_.size(blogPosts) - 1].title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {blogPosts[_.size(blogPosts) - 1].prolog}
            </Typography>
            <Typography variant="subtitle1" color="inherit" paragraph>
              {blogPosts[_.size(blogPosts) - 1].article}
            </Typography>
            <Link variant="subtitle1" href="#">
              {"Read more..."}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
