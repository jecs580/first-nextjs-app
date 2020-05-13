import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/container";
const UserProfile = ({ user }) => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <img src={user.avatar} alt="" style={{ borderRadius: "50%" }} />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id} {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
UserProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  console.log(resJSON);

  return { user: resJSON.data };
};
export default UserProfile;
