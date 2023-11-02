/* eslint-disable react/prop-types */
import "../styles/Navigation.css";
import Button from "./Button";

export default function Navigation({ title }) {
  return (
    <nav>
      <h1>{title}</h1>
      <Button width="90%" />
      <Button width="90%" />
      <Button width="90%" />
      <Button width="90%" />
      <Button width="90%" />
    </nav>
  );
}
