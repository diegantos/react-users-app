import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false)

  const handlerAddUser = (user) => {

    dispatch({
      type: (user.id === 0) ? 'addUser' : 'updateUser',
      payload: user,
    });

    Swal.fire(
      user.id === 0 ? "Usuario creado" : "Usuario actualizado",
      user.id === 0
        ? "El usuario ha sido creado correctamente"
        : "El usuario ha sido actualizado correctamente",
      "success"
    );
    setVisibleForm(false)
    setUserSelected(initialUserForm)
  };

  const handlerRemoveUser = (id) => {

    Swal.fire({
      title: "¿Está seguro que desea eliminar?",
      text: "Esta acción no se podrá deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
            type: "removeUser",
            payload: id,
        });
        Swal.fire("Usuario eliminado", "Usuario eliminado correctamente", "success");
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true)
    setUserSelected({ ...user });
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  };
};
