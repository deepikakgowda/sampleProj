import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
}

const AddUser = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [annualSalary, setSalary] = useState(0);
  const [dateOfBirth, setDOB] = useState("");

  const submit = () => {
    const prop: Props = {
      code: code,
      name: name,
      gender: gender,
      annualSalary: annualSalary,
      dateOfBirth: dateOfBirth,
    };
    console.log(prop);
  };

  return (
    <div className="container-fluid">
      <h1>Add User</h1>
      <div>
        <label>Code</label>
        <input
          type="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </div>
      <div>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
      </div>
      <div>
        <label>AnnualSalary</label>
        <input
          type="text"
          value={annualSalary}
          onChange={(event) => setSalary(Number(event.target.value))}
        />
      </div>
      <div>
        <label>DOB</label>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(event) => setDOB(event.target.value)}
        />
      </div>

      <button type="button" className="btn btn-primary m-2" onClick={submit}>
        Submit
      </button>

      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => navigate("/employeeList")}
      >
        Back to list
      </button>
    </div>
  );
};
export default AddUser;
