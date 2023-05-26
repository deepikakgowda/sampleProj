import { useState } from "react";

function ListComponent() {
  let items = ["kolkata", "Bangalore", "Delhi", "chennai", "mumbai"];
  const [city, setCity] = useState(-1);
  const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];
  return (
    <>
      <h1>Dynamic List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li
            className={
              city === index ? "list-group-item active" : "list-group-item"
            }
            key={index}
            onClick={() => setCity(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListComponent;
