import { Grid, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { store } from "../../db/store";
import { userActions } from "../../db/user-slice";
import { useAppSelector } from "../../hooks/db-hooks";
import { IUserDocument } from "../../types/user-types";
import UserListItem from "./UserListItem";

const UserList = () => {
  const users = useAppSelector((state) => state.users);
  // const [list, setList] = useState<IUserDocument[]>([])

  // useEffect(() => {
  //   if(users)
  // }, [users])
  

  return (
    <div>
      {users.list.length === 0 && (
        <Stack alignItems="center">
          <Typography variant="h1" color="error">
            No users available
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              store.dispatch(userActions.setFetchData(true));
            }}
          >
            fetch users
          </Button>
        </Stack>
      )}
      {users.list.length > 0 && (
        <Grid container spacing={2}>
          {users.list.map((user) => (
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
