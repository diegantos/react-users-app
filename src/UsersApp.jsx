import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { LoginReducer } from "./auth/reducers/LoginReducer";
import Swal from "sweetalert2";
import { Navbar } from "./components/layout/Navbar";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
  isAuth: false,
  user: undefined,
};

export const UsersApp = () => {

  const [login, dispach] = useReducer(LoginReducer, initialLogin)

  const handlerLogin = ({username, password}) => {
    if (username === 'admin' && password === '12345') {
      const user = { username: 'admin'}
      dispach({
        type: 'login',
        payload: user,
      })
      sessionStorage.setItem('login', JSON.stringify({
        isAuth: true,
        user: user,
      }))
    } else {
      Swal.fire(
        "Error de validación",
        "Username y password deben ser válidos",
        "error"
      );
    }
  }
  
  const handlerLogout = () => {
    dispach({
      type: 'logout',
    })
    sessionStorage.removeItem('login')
  }

  return (
    <>
      {login.isAuth 
        ? <> <Navbar handlerLogout={handlerLogout} /> <UsersPage /> </> 
        : <LoginPage handlerLogin={handlerLogin} />}
    </>
  );
};
