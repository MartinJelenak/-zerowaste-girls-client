import React from "react";
import { Link, LinkProps } from "found";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface ListItemLinkProps {
  to: string;
  primary: string;
}

export default function ListItemLink(props: ListItemLinkProps) {
  const { primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((linkProps, ref) => {
        return <Link ref={ref} to={to} {...linkProps} />;
      }),
    [to]
  );

  return (
    <ListItem button component={CustomLink}>
      <ListItemText primary={primary} />
    </ListItem>
  );
}
