function Menu() {
  let lists = ["Home", "Login", "Blog"];
  //lists = [];
  const click = (event: MouseEvent) => console.log(event);
  return (
    <>
      {lists.length === 0 && <p>No menu found</p>}
      <ul className="list-group">
        {lists.map((x) => (
          <li className="list-group-item" key={x} onClick={click}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
