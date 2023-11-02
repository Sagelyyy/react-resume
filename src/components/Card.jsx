/* eslint-disable react/prop-types */
import "../styles/Card.css";

export default function Card({
  title = "No Title Added",
  children,
  height = "auto",
  width = "auto",
}) {
  const styles = {
    width,
    height,
  };
  return (
    <div style={styles} className="card">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
