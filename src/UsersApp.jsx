import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { LoginReducer } from "./auth/reducers/LoginReducer";
import Swal from "sweetalert2";

const initialLogin = {
  isAuth: false,
  user: undefined,
}

export const UsersApp = () => {

  const [login, dispach] = useReducer(LoginReducer, initialLogin)

  const handlerLogin = ({username, password}) => {
    if (username === 'admin' && password === '12345') {
      const user = { username: 'admin'}
      dispach({
        type: 'login',
        payload: user,
      })
    } else {
      Swal.fire(
        "Error de validación",
        "Username y password deben ser válidos",
        "error"
      );
    }
  }
  
  return (
    <>
      {login.isAuth ? <UsersPage /> : <LoginPage handlerLogin={handlerLogin} />}
    </>
  );
};
