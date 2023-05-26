import { useState } from "react";

function FavColor() {
  const [fruit, setFruits] = useState("Apple");
  return (
    <div>
      My fav fruit is {fruit}
      <button onClick={() => setFruits("orange")}>Click</button>
    </div>
  );
}
export default FavColor;
