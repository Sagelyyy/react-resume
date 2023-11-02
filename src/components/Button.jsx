/* eslint-disable react/prop-types */
import "../styles/Button.css";

export default function Button({
  name = "Unamed",
  width = "100",
  height = "25",
  text = "white",
}) {
  const styles = {
    height: height,
    width: width,
    color: text,
  };
  return <button style={styles}>{name}</button>;
}
