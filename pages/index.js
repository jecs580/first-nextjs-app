import Container from "../components/container";
import Head from "next/head";
import Navigation from "../components/navigation";
const Index = () => {
  return (
    <div>
      <Container>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Hello World</h1>
      </Container>
    </div>
  );
};

export default Index;
