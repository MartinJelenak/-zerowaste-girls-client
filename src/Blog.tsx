import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
//
import { createFragmentContainer, Environment, RelayProp } from "react-relay";
import { Blog_data } from "./__generated__/Blog_data.graphql";
import { graphql } from "babel-plugin-relay/macro";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

// const mainFeaturedPost = {
//   title: "Title of a longer featured blog post",
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: "https://source.unsplash.com/random",
//   imgText: "main image description",
//   linkText: "Continue reading…",
// };

const sections: { title: string; to: string; disable: boolean }[] = [
  { title: "Blog", to: "/progress", disable: false },
  { title: "About as", to: "/progress", disable: true },
  { title: "Reference", to: "/progress", disable: true },
  { title: "Faq", to: "/progress", disable: true },
  { title: "Eshop", to: "/progress", disable: true },
];

interface BlogProps {
  data: Blog_data;
  // relay?: RelayProp;
}

function Blog(props: BlogProps) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          <MainFeaturedPost data={props.data} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}

export default createFragmentContainer(Blog, {
  data: graphql`
    fragment Blog_data on Query {
      notes {
        _id
        title
        prolog
        article
      }
    }
  `,
});
