import { Checkbox } from "@material-ui/core";
import React from "react";
import useCheckboxStyles from "./CheckBoxStyles";
import clsx from "clsx";

interface Props {
  onClick: () => any;
  isBoxSelected?: boolean;
}
export const CheckBox: React.FC<Props> = ({
  onClick,
  isBoxSelected,
}) => {
  const classes = useCheckboxStyles();
  return (
    <Checkbox
      className={classes.root}
      checked={isBoxSelected}
      disableRipple
      onClick={onClick}
      color="default"
      icon={<span className={classes.icon} />}
      checkedIcon={
        <span className={clsx(classes.icon, classes.checkedIcon)} />
      }
    />
  );
};
