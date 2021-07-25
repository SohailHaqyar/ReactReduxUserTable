import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { TableRow } from "./components/TableRow/TableRow";
import { actionCreators, State } from "./state";
import { IDefaultState } from "./state/reducers/user.reducer";
import { AccountCircleOutlined } from "@material-ui/icons";
import QuestionMark from "./Questionmark.svg";
import { useState } from "react";
import { User } from "./state/actions";
import { CheckBox } from "./components/Checkbox/CheckBox";

export const App = () => {
  const dispatch = useDispatch();

  const { getUsers } = bindActionCreators(actionCreators, dispatch);

  const users: IDefaultState = useSelector(
    (state: State) => state.user
  );

  useEffect(() => {
    getUsers();
  }, []);

  const [checkedUsers, setCheckedUsers] = useState([]);
  const checkAll = () => {
    checkedUsers.length === users.users.length
      ? setCheckedUsers([])
      : setCheckedUsers(users.users as any);
  };
  return (
    <div className="container">
      {users.loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <div className="top-part">
            <div className="headline">
              <AccountCircleOutlined fontSize="large" />
              <h2 className="title">Users</h2>
            </div>
            <div className="user-selects">
              <span>{checkedUsers.length} Selected</span>
              <img src={QuestionMark} alt="" />
            </div>
          </div>
          <table className="content-table">
            <thead>
              <tr>
                <th style={{ width: "16%" }}>
                  <CheckBox onClick={checkAll} />
                  <span style={{ marginLeft: "10px" }}>Type</span>
                </th>
                <th style={{ width: "16%" }}>Name</th>
                <th style={{ width: "16%" }}>Email</th>
                <th style={{ width: "52%" }}>Telephone</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {users.users.map((user) => (
                <TableRow
                  user={user}
                  key={user.id}
                  setSelectedUsers={setCheckedUsers}
                  isSelected={() => {
                    const result = checkedUsers.find(
                      (u: User) => u.id === user.id
                    );
                    if (!result) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default App;
