import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = ({ handlerLogout, login }) => {

  return (
    <>
      <UserProvider>
        <Navbar handlerLogout={handlerLogout} login={login} />
        <Routes>
          <Route
            path="users"
            element={
              <UsersPage
                users={users}
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                visibleForm={visibleForm}
                handlerAddUser={handlerAddUser}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
                handlerOpenForm={handlerOpenForm}
                handlerCloseForm={handlerCloseForm}
              />
            }
          />
          <Route
            path="users/register"
            element={
              <RegisterPage />
            }
          />
          <Route
            path="users/edit/:id"
            element={
              <RegisterPage />
            }
          />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
