interface Props {
  text: String;
}

function Msg(prop: Props) {
  return <h1>{prop.text}</h1>;
}
export default Msg;
