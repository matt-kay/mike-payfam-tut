import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import UserContainer from "./components/user/UserContainer";
import { store } from "./db/store";
import { IUserDocument } from "./types/user-types";
import Typography from "@mui/material/Typography";
import { userActions } from "./db/user-slice";
import Button from "@mui/material/Button";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [fetchData, setfetchData] = useState(false);
  // const fetchData = store.getState().users.fetchdata;

  useEffect(() => {
    (async () => {
      if (fetchData === true) {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();

        if (json) {
          const _list = json as IUserDocument[];

          store.dispatch(userActions.addToList(_list));
          store.dispatch(userActions.setFetchData(false));
          setfetchData(false)
        }

        setLoading(false);
      }
    })();
  }, [fetchData]);
  return (
    <Provider store={store}>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setfetchData(true);
          }}
        >
          fetchdata
        </Button>
        {loading && (
          <Typography variant="subtitle1" color="textPrimary">
            Loading...
          </Typography>
        )}
        {!loading && <UserContainer />}
      </div>
    </Provider>
  );
};

export default App;
