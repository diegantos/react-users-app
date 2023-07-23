import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";

export const UsersApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm
  } = useUsers()

  return (
    <>
      {!visibleForm || (
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" style={ {display:'block'}} tabIndex="-1">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {userSelected.id > 0 ? "Editar" : "Crear"}
                  </h5>
                </div>
                <div className="modal-body">
                  <UserForm
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
