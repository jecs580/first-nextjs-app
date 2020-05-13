import Router from "next/router";
const Users = (props) => {
  return (
    <ul className="list-group">
      {props.users.map((u) => (
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          key={u.id}
          onClick={(e) => Router.push("/users/[id]", `/users/${u.id}`)}
        >
          <div>
            <h5>
              {u.first_name} {u.last_name}
            </h5>
            <p>Email:{u.email}</p>
          </div>
          <img src={u.avatar} alt="" style={{ borderRadius: "50%" }} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
