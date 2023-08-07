import { UserForm } from "../components/UserForm"

export const RegisterPage = ({handlerAddUser, initialUserForm, userSelected}) => {
    return(
        <div className="container my-4">
            <h4>Registro de Usuarios</h4>
            <div className="row">
                <div className="col">
                    <UserForm />
                </div>
            </div>
        </div>
    )
}