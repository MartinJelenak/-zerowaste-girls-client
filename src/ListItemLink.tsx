import React from "react";
import { Link, LinkProps } from "found";
import {
  Theme,
  Button,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { Link as Linkos } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbarLink: {
    flexShrink: 0,
  },
  paddingStyle: {
    textDecoration: "none",
    color: "black",
  },
}));

interface ListItemLinkProps {
  to: string;
  primary: string;
  icon?: React.ReactElement;
  disable: boolean;
}

export default function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, icon, disable } = props;
  const classes = useStyles();

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((linkProps, ref) => {
        return (
          <Linkos
            noWrap
            variant="body2"
            underline="hover"
            className={classes.toolbarLink}
          >
            <Link
              ref={ref}
              to={to}
              {...linkProps}
              className={classes.paddingStyle}
            ></Link>
          </Linkos>
        );
      }),
    [to]
  );

  return (
    <ListItem
      button={false}
      disabled={disable}
      component={CustomLink}
      className={classes.paddingStyle}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText
        primary={primary}
        disableTypography={true}
        className={classes.paddingStyle}
      />
    </ListItem>
  );
}
