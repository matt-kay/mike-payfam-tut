import { Paper, Stack } from "@mui/material";
import { IUserDocument } from "../../types/user-types";
import UserListItemAddress from "./UserListItemAddress";
import UserListItemCompany from "./UserListItemCompany";

interface Props {
  user: IUserDocument;
}
const UserListItem = ({ user }: Props) => {
  return (
    <Paper elevation={10} sx={{ p: 1 }}>
      <Stack alignItems="center">
        <p>{user.username}</p>
        <p>{user.email}</p>
        <UserListItemAddress address={user.address} />
        <UserListItemCompany company={user.company} />
      </Stack>
    </Paper>
  );
};

export default UserListItem;
