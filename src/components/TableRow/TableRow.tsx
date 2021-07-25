import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { User } from "../../state/actions";
import { UserTypeBox } from "../UserTypeBox";
import SwitchIcon from "../../switch-active.svg";
import InActiveSwitchIcon from "../../switch.svg";
import { CheckBox } from "../Checkbox/CheckBox";
import useTableRowStyles from "./TableRowStyles";

interface Props {
  user: User;
  setSelectedUsers: any;
  isSelected: () => boolean;
}
export const TableRow: React.FC<Props> = ({
  user,
  setSelectedUsers,
  isSelected,
}) => {
  const [isChecked, setIsChecked] = useState(user.active);
  const dispatch = useDispatch();
  const { updateUserStatus } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    updateUserStatus(user.id, !user.active);
  };

  const isBoxSelected = isSelected();
  const classes = useTableRowStyles();

  return (
    <tr>
      <td className={classes.centralize}>
        <CheckBox
          isBoxSelected={isBoxSelected}
          onClick={() =>
            setSelectedUsers((prevState: any) => {
              const checked = prevState.find(
                (element: User) => element.id === user.id
              );
              if (!checked) {
                return [...prevState, user];
              } else {
                return prevState.filter(
                  (element: User) => element.id !== user.id
                );
              }
            })
          }
        />
        <UserTypeBox type={user.type} />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td className={classes.centralize}>
        {user.active ? (
          <img
            src={SwitchIcon}
            alt=""
            onClick={handleOnChange}
            className={classes.switchImage}
          />
        ) : (
          <img
            src={InActiveSwitchIcon}
            className={classes.switchImage}
            alt=""
            onClick={handleOnChange}
          />
        )}
      </td>
    </tr>
  );
};
