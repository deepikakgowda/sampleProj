import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  let employee = {
    code: "e001",
    name: "Tom",
    gender: "Male",
    annualSalary: 5500,
    dateOfBirth: "25/6/1988",
  };
  return (
    <div>
      <h1> Employee Details</h1>
      <div>
        code: {employee.code}
        Name: {employee.name}
        Gender: {employee.gender}
        AnnualSalary: {employee.annualSalary}
        DateOfBirth: {employee.dateOfBirth}
      </div>
      <button type="button" onClick={() => navigate("/EmployeeLists")}>
        Back to Lists
      </button>
    </div>
  );
};
export default Detail;
