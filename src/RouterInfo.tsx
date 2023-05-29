import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import AddUser from "./pages/AddUser";
import Detail from "./pages/Detail";

const RouterInfo = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="employeelist" element={<EmployeeList />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="addUser" element={<AddUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterInfo;
