import { isRejectedWithValue } from "@reduxjs/toolkit"
// import { logout } from '../features/authenticationSlice';

export const unauthenticatedMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) && action.payload.status === 401) {
    // dispatch(logout());
  }
  return next(action)
}
