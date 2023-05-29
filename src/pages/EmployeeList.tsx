import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();

  const detail = () => {
    navigate("/deatil");
  };

  const addUser = () => {
    navigate("/addUser");
  };

  const employees = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      annualSalary: 5500,
      dateOfBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      annualSalary: 6700,
      dateOfBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      annualSalary: 8900,
      dateOfBirth: "9/6/1991",
    },
  ];
  return (
    <div>
      <h1>Employee Lists</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">AnnualSalary</th>
            <th scope="col">DateOfBirth</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <>
              <tr>
                <td>{employee.code}</td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.annualSalary}</td>
                <td>{employee.dateOfBirth}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={detail}
                  >
                    Details
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={addUser}>
        add User
      </button>
    </div>
  );
};
export default EmployeeList;
