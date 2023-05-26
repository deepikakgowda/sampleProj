import { useState } from "react";

interface Props {
  heading: String;
  items: String[];
}

function ListComponent(prop: Props) {
  //let items = ["kolkata", "Bangalore", "Delhi", "chennai", "mumbai"];
  const [city, setCity] = useState(-1);
  const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];
  return (
    <>
      <h1>{prop.heading}</h1>
      {prop.items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {prop.items.map((x, index) => (
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
