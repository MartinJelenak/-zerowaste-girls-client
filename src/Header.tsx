import * as React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { Link } from "found";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import * as _ from "lodash";
import ListItemLink from "./ListItemLink";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

interface HeaderProps {
  sections: { title: string; to: string; disable: boolean }[];
}

export default function Header(props: HeaderProps) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <ListItemLink
          to="/"
          primary="Zerowasted girls"
          // icon={<LocalDiningIcon />}
          disable={false}
        ></ListItemLink>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        ></Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {_.map(props.sections, (item) => (
          <ListItemLink
            to={item.to}
            primary={item.title}
            disable={item.disable}
          ></ListItemLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

// Header.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
//   to: PropTypes.string,
// };
