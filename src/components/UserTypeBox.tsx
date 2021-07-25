import classNames from "classnames";
import React from "react";
import { UserAdminType } from "../state/actions";

interface Props {
  type: UserAdminType;
}
export const UserTypeBox: React.FC<Props> = ({ type }) => {
  const classes = classNames("user-type-box", {
    supervisor: type === "Supervisor",
    stakeholder: type === "Stakeholder",
    guest: type === "Guest",
    employee: type === "Employee",
  });
  return <div className={classes}>{type[0] + type[1]}</div>;
};
