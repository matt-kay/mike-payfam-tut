import { Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { IUserDocument } from "../../types/user-types";
import UserListItem from "./UserListItem";

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<IUserDocument[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();

      if (json) {
        const _list = json as IUserDocument[];

        setUsers(_list);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {loading && <b>Loading...</b>}
      {!loading && users && (
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={6} md={3} key={user.id}>
              <UserListItem user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default UserList;
