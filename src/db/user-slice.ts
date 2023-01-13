import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserDocument } from "../types/user-types";

export interface IUserState {
  list: IUserDocument[];
  fetchdata: boolean;
}

const initialState: IUserState = {
  list: [],
  fetchdata: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<IUserDocument[]>) => {
      state.list = [...action.payload];
      return state;
    },
    updateList: (state, action: PayloadAction<IUserDocument>) => {
      state.list.push(action.payload);
      return state;
    },
    setFetchData: (state, action: PayloadAction<boolean>) => {
      state.fetchdata = action.payload;
      return state;
    },
  },
});

export const userActions = userSlice.actions;
export const userName = userSlice.name;
export const userReducer = userSlice.reducer;

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

//  dispatch actions to manipulate data
// dispatch({
//   type: "addToList",
//   payload: {
//     users: [],
//   },
// });

//dto - data transfer object, payload
// use the selector to get data
