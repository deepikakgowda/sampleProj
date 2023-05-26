import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./component/Message";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Content from "./component/Content";
import Footer from "./component/footer";
import ListComponent from "./component/ListComponent";
import FavColor from "./component/FavColor";

function App() {
  return (
    <div>
      <ListComponent />
    </div>
  );
}

export default App;
