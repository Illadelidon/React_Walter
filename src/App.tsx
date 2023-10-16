import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from "./pages/dafaultPage";
import AllUsers from "./pages/users/allUsers";
import AddUsers from "./pages/users/addUsers";
import UpdateUsers from "./pages/users/updateUsers";
import UpdatePassword from "./pages/users/update_password";

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);

  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Administrator" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="addusers" element={<AddUsers />} />
              <Route path="updateusers" element={<UpdateUsers/>}/>
              <Route path="updatepassword" element={<UpdatePassword />} />
            </Route>
          )}
          {user.role === "User" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="updatepassword" element={<UpdatePassword />} />
            </Route>
          )}
        </>
      )}

      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={< SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
