export const UserRow = ({id, username, email, handlerRemoveUser}) => {

  const onRemoveUser = (id) => {
    handlerRemoveUser(id)
  }

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button type="button" className="btn btn-secondary btn-sm">
            update
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-danger btn-sm" onClick={ ()=> onRemoveUser(id) }>
            remove
          </button>
        </td>
      </tr>
    </>
  );
};
