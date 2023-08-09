import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hook/useUsers";

export const UsersPage = ({
  users,
  userSelected,
  initialUserForm,
  visibleForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerUserSelectedForm,
  handlerOpenForm,
  handlerCloseForm,
}) => {

  return (
    <>
      {!visibleForm || (
        <UserModalForm
          userSelected={userSelected}
          initialUserForm={initialUserForm}
          handlerAddUser={handlerAddUser}
          handlerCloseForm={handlerCloseForm}
        />
      )}
      <div className="container my-4">
        <h2>App de usuarios</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                Nuevo usuario
              </button>
            )}

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
