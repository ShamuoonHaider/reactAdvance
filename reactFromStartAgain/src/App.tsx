import logo from "../public/image.png";

const App = () => {
  return (
    <main>
      <img src={logo} width="40px" />
      <h1>Fun Facts about react</h1>
      <ul>
        <li>Was first created in 2013</li>
        <li>Was orignally created by jordan walke</li>
        <li>Has well over 100k stars on github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of Enterprise level apps including Mobile Apps</li>
      </ul>
    </main>
  );
};

export default App;
