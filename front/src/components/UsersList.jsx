import { useGetUsersQuery } from "../store/usersApiSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading ..."</p>;
  } else if (isSuccess) {
    content = (
      <section className="users container">
        <h1>Users List</h1>
        <ul>
          {users.map((user, i) => {
            return (
              <li key={i} style={{ display: "flex" }}>
                {user.email} {""}
                <span style={{ marginLeft: "auto", color: "indigo" }}>
                  {user?.refreshToken[0]?.slice(0, 10)}
                </span>
              </li>
            );
          })}
        </ul>
        <Link to="/info" style={{ color: "goldenrod" }}>
          Back to Info
        </Link>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }
  return content;
};

export default UsersList;
