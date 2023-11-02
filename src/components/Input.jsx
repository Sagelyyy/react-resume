/* eslint-disable react/prop-types */
import "../styles/Input.css";
import { StoreContext } from "../utils/store";
import { useContext } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Input({
  height = "25px",
  width = "90%",
  ph,
  ml,
  dataType,
  keyData,
}) {
  const [education, setEducation] = useState({
    id: nanoid(),
    schoolName: "ABC University",
    degree: "Masters in Cool",
    start: "10/20/2020",
    end: "present",
    location: "Massachusetts, USA",
  });
  const { resume, setResume } = useContext(StoreContext);
  const styles = {
    height,
    width,
    marginLeft: ml,
  };

  const handleChange = (e, dataType, keyData) => {
    switch (dataType) {
      case "resume":
        setResume({
          ...resume,
          [keyData]: e.target.value,
        });
        break;
      case "education":
        setEducation({
          ...education,
          [keyData]: e.target.value,
        });
        break;
      default:
        setResume({
          ...resume,
          [keyData]: e.target.value,
        });
        break;
    }
  };

  return (
    <input
      onChange={(e) => {
        handleChange(e, dataType, keyData);
      }}
      style={styles}
      placeholder={ph}
    ></input>
  );
}
