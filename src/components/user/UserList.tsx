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
        <>
          {users.map((user) => (
            <Fragment key={user.id}>
              <UserListItem user={user} />
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default UserList;
