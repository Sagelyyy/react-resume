/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../utils/store";
import "../styles/Preview.css";

export default function Preview({ handleEdit, handleDelete }) {
  const { resume, setResume } = useContext(StoreContext);

  return (
    <div className="preview-container">
      <div className="header">
        <h1>{resume.fullName}</h1>
        <div>
          <p>{resume.email}</p>
          <p>{resume.phone}</p>
          <p>{resume.address}</p>
        </div>
        <hr className="hr-black"></hr>
        <h2>Education</h2>
      </div>
      {resume.education.map((edu) => {
        return (
          <div className="education" key={edu.id}>
            <div>
              <div className="edu-dates">
                <h4>
                  {edu.start} - {edu.end}
                </h4>
                <p>{edu.location}</p>
              </div>
              <div className="edu-info">
                <h4>{edu.schoolName}</h4>
                <p>{edu.degree}</p>
              </div>
            </div>
            <button
              className="save"
              onClick={() => {
                handleEdit(edu.id);
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                handleDelete(edu.id, "education");
              }}
            >
              Delete
            </button>
            <hr className="hr-grey"></hr>
          </div>
        );
      })}
      {resume.experience.map((exp) => {
        return (
          <div className="experience" key={exp.id}>
            <div>
              <div className="exp-dates">
                <h4>
                  {exp.start} - {exp.end}
                </h4>
                <p>{exp.location}</p>
              </div>
              <div className="exp-info">
                <h4>{exp.companyName}</h4>
                <p>{exp.title}</p>
                <p>{exp.description}</p>
              </div>
            </div>
            <button
              className="save"
              onClick={() => {
                handleEdit(exp.id);
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                handleDelete(exp.id, "experience");
              }}
            >
              Delete
            </button>
            <hr className="hr-grey"></hr>
          </div>
        );
      })}
    </div>
  );
}
