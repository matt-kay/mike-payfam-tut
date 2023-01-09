import { IUserDocument } from "../../types/user-types";
import UserListItemAddress from "./UserListItemAddress";
import UserListItemCompany from "./UserListItemCompany";

interface Props {
  user: IUserDocument;
}
const UserListItem = ({ user }: Props) => {
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <UserListItemAddress address={user.address} />
      <UserListItemCompany company={user.company} />
    </div>
  );
};

export default UserListItem;
