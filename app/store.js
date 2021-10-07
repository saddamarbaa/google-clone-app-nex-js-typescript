/** @format */

import { configureStore } from "@reduxjs/toolkit";
import sendPostReducer from "../features/sendPost/sendPostSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
	reducer: {
		sendPost: sendPostReducer,
		user: userReducer,
	},
});
