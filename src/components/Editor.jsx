/* eslint-disable react/prop-types */
import "../styles/Editor.css";
import Card from "./Card";

export default function Editor({ eduEdit, expEdit, handleChange, handleSave }) {
  return (
    <div className="editor">
      <Card title="Personal Details">
        <input
          placeholder="Full Name"
          type="text"
          onChange={(e) => {
            handleChange(e, "resume", "fullName");
          }}
        />
        <input
          placeholder="email@address.com"
          type="text"
          onChange={(e) => {
            handleChange(e, "resume", "email");
          }}
        />
        <input
          placeholder="Phone"
          type="text"
          onChange={(e) => {
            handleChange(e, "resume", "phone");
          }}
        />
        <input
          placeholder="Address"
          type="text"
          onChange={(e) => {
            handleChange(e, "resume", "address");
          }}
        />
      </Card>
      <Card title="Education">
        <div>
          <input
            placeholder="School Name"
            type="text"
            onChange={(e) => {
              handleChange(e, "education", "schoolName");
            }}
            value={eduEdit ? eduEdit.schoolName : ""}
          />
          <input
            placeholder="Degree"
            onChange={(e) => {
              handleChange(e, "education", "degree");
            }}
            type="text"
            value={eduEdit ? eduEdit.degree : ""}
          />
          <div>
            <input
              placeholder="Start Date"
              onChange={(e) => {
                handleChange(e, "education", "start");
              }}
              type="text"
              value={eduEdit ? eduEdit.start : ""}
            />
            <input
              placeholder="End Date"
              onChange={(e) => {
                handleChange(e, "education", "end");
              }}
              type="text"
              value={eduEdit ? eduEdit.end : ""}
            />
          </div>
          <input
            placeholder="Location"
            onChange={(e) => {
              handleChange(e, "education", "location");
            }}
            type="text"
            value={eduEdit ? eduEdit.location : ""}
          />
        </div>
        <button
          className="save"
          onClick={() => {
            handleSave("education");
          }}
        >
          Save
        </button>
      </Card>
      <Card title="Experience">
        <div>
          <input
            placeholder="Company Name"
            type="text"
            onChange={(e) => {
              handleChange(e, "experience", "companyName");
            }}
            value={expEdit ? expEdit.companyName : ""}
          />
          <input
            placeholder="Job Title"
            onChange={(e) => {
              handleChange(e, "experience", "title");
            }}
            type="text"
            value={expEdit ? expEdit.title : ""}
          />
          <div>
            <input
              placeholder="Start Date"
              onChange={(e) => {
                handleChange(e, "experience", "start");
              }}
              type="text"
              value={expEdit ? expEdit.start : ""}
            />
            <input
              placeholder="End Date"
              onChange={(e) => {
                handleChange(e, "experience", "end");
              }}
              type="text"
              value={expEdit ? expEdit.end : ""}
            />
          </div>
          <input
            placeholder="Location"
            onChange={(e) => {
              handleChange(e, "experience", "location");
            }}
            type="text"
            value={expEdit ? expEdit.location : ""}
          />
          <input
            placeholder="Job Description"
            onChange={(e) => {
              handleChange(e, "experience", "description");
            }}
            type="text"
            value={expEdit ? expEdit.description : ""}
          />
        </div>
        <button
          className="save"
          onClick={() => {
            handleSave("experience");
          }}
        >
          Save
        </button>
      </Card>
    </div>
  );
}
