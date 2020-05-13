import Container from "../components/container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "../components/users";
const Index = (props) => {
  return (
    <div>
      <Container>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Next</h1>
        <Users users={props.users} />
      </Container>
    </div>
  );
};
Index.getInitialProps = async (ctx) => {
  // Carga inicial de datos,esto significa enviar la página con los datos ya rellenados desde el servidor
  const res = await fetch("https://reqres.in/api/users");
  const resJson = await res.json();
  return { users: resJson.data };
};
export default Index;
