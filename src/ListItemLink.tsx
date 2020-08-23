import React from "react";
import { Link, LinkProps } from "found";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";

interface ListItemLinkProps {
  to: string;
  primary: string;
  icon?: React.ReactElement;
}

export default function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, icon } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((linkProps, ref) => {
        return <Link ref={ref} to={to} {...linkProps} />;
      }),
    [to]
  );

  return (
    <ListItem button component={CustomLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
}
