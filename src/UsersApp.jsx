import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";

export const UsersApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  } = useUsers()

  return (
    <>
      <div className="container my-4">
        <h2>App de usuarios</h2>
        <div className="row">
          <div className="col">
            <UserForm
              initialUserForm={initialUserForm}
              handlerAddUser={handlerAddUser}
              userSelected={userSelected}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary my-2">Nuevo usuario</button>
            {users.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios creados en el sistema
              </div>
            ) : (
              <UsersList
                handlerUserSelectedForm={handlerUserSelectedForm}
                handlerRemoveUser={handlerRemoveUser}
                users={users}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
