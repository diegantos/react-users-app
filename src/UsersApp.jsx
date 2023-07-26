import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { LoginReducer } from "./auth/reducers/LoginReducer";

const initialLogin = {
  isAuth: false,
  user: undefined,
}

export const UsersApp = () => {

  const [login, dispach] = useReducer(LoginReducer, initialLogin)
  
  return (
    <>
      <LoginPage />
      {/* <UsersPage /> */}
    </>
  );
};
