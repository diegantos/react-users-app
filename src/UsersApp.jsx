import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 0,
    username: "Pepe",
    password: "12345",
    email: "pepe@correo.com",
  },
];

const initialUserForm = {
    id: 0,
  username: "",
  password: "",
  email: "",
};

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm)

  const handlerAddUser = (user) => {

    let type
    if(user.id === 0){
        type = 'addUser'
    }else{
        type = 'updateUser'
    }

    dispatch({
      type: type,
      payload: user,
    });
  };

  const handlerRemoveUser = (id) => {
    dispatch({
      type: "removeUser",
      payload: id,
    });
  };

  const handlerUserSelectedForm = (user) => {
    setUserSelected({...user})
  }

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
            {users.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios creados en el sistema
              </div>
            ) : (
              <UsersList 
                handlerUserSelectedForm={ handlerUserSelectedForm } 
                handlerRemoveUser={handlerRemoveUser} 
                users={users} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
