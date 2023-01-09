import { IUserAddress } from "../../types/user-types";

interface Props {
  address: IUserAddress;
}
const UserListItemAddress = ({ address }: Props) => {
  return (
    <div
      style={{ borderTop: "3px solid green", borderBottom: "3px solid red" }}
    >
      <p>{address.city}</p>
      <p>{address.street}</p>
      <p>{address.suite}</p>
    </div>
  );
};

export default UserListItemAddress;
