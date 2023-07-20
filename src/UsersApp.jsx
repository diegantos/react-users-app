import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"

const initialUsers = [
    {
        id:0,
        username: 'Pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
]
export const UsersApp = () => {

    const handlerAddUser = (user) => {
        console.log(user)
    }

    return (
      <>
        <div className="container my-4">
          <h2>App de usuarios</h2>
          <div className="row">
            <div className="col">
              <UserForm handlerAddUser={handlerAddUser} />
            </div>
            <div className="col">
              <UsersList users={initialUsers} />
            </div>
          </div>
        </div>
      </>
    );
}