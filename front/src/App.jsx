import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Public from "./pages/Public";
import Welcome from "./pages/Welcome";
import RequireAuth from "./pages/RequireAuth";
import LoginScreen from "./pages/LoginScreen";
import PersonInfo from "./pages/PersonInfo";
import Register from "./pages/RegisterScreen";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LoginScreen />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="usersList" element={<UsersList />} />
          <Route path="info" element={<PersonInfo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
