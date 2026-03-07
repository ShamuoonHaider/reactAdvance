import { Button } from "../components/Button";

const Home = () => {
  return (
    <section className="my-20 flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-10">Welcome Home</h1>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </section>
  );
};

export default Home;
