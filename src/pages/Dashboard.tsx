import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/employeeList");
  };

  const logOut = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Employee Details
      </button>

      <button type="button" className="btn btn-secondary" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};
export default Dashboard;
