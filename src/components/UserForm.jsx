import { useState } from "react";

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const UserForm = () => {

  const [userForm, setUserForm] = useState(initialUserForm);
  const { username, password, email } = userForm

  const onInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target
    setUserForm({
        ...userForm,
        [name]: value,
    })
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          type="password"
          className="form-control my-3 w-75"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Crear
        </button>
      </form>
    </>
  );
};
