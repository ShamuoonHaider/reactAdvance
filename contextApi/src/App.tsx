import { useContext } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        {user ? <Dashboard /> : <LoginPage />}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
