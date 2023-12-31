import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({userSelected, handlerCloseForm}) => {

  const {initialUserForm, handlerAddUser} = useContext(UserContext)
  const [userForm, setUserForm] = useState(initialUserForm);
  const { username, password, email, id } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: "",
    });
  }, [userSelected]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      Swal.fire(
        "Error de validación",
        "Debe completar todos los campos del formulario",
        "error"
      );
      return;
    }
    if (!email.includes('@')) {
      Swal.fire(
        "Error de validación de email",
        "El email debe incluir @",
        "error"
      );
      return
    }

    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        {id > 0 || (
          <input
            type="password"
            className="form-control my-3 w-75"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        )}

        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input type="hidden" name="id" value={id} />
        <button className="btn btn-primary" type="submit">
          {id > 0 ? "Editar" : "Crear"}
        </button>
        {!handlerCloseForm || (
          <button
            className="btn btn-primary mx-2"
            type="button"
            onClick={() => onCloseForm()}
          >
            Cerrar
          </button>
        )}
      </form>
    </>
  );
};
