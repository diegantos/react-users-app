import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

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

  const getUsers = async () => {
    const result = await findAll()
    console.log(result)
    dispatch({
      type: 'loadingUsers',
      payload: result.data,
    })
  }

  const handlerAddUser = async (user) => {

    let response
    try {
      if (user.id === 0) {
        response = await save(user);
      } else {
        response = await update(user);
      }

      dispatch({
        type: user.id === 0 ? "addUser" : "updateUser",
        payload: response.data,
      });

      Swal.fire(
        user.id === 0 ? "Usuario creado" : "Usuario actualizado",
        user.id === 0
          ? "El usuario ha sido creado correctamente"
          : "El usuario ha sido actualizado correctamente",
        "success"
      );
      handlerCloseForm();
      // navigate("/users");
    } catch (error) {
      console.error(error)
    }
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
        remove(id)
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

  const handlerOpenForm = () => {
    setVisibleForm(true)
  }

  const handlerCloseForm = () => {
    setVisibleForm(false)
    setUserSelected(initialUserForm)
  }

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers
  };
};
