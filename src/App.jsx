import "./styles/App.css";
import Navigation from "./components/Navigation";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { useState } from "react";
import { StoreContext, defaultStore } from "./utils/store";

function App() {
  const [resume, setResume] = useState(defaultStore);
  const [eduEdit, setEduEdit] = useState();
  const [expEdit, setExpEdit] = useState();

  const handleEdit = (selectedId) => {
    const selected = resume.education.find((arr) => {
      return arr.id == selectedId;
    });
    setEduEdit(selected);
  };

  const handleSave = (arr) => {
    const filtered = resume[arr].filter((item) => item.id !== arr.id);
    if (arr == "education") {
      setResume({ ...resume, education: [...filtered, { ...eduEdit }] });
      setEduEdit();
    } else {
      setResume({ ...resume, experience: [...filtered, { ...expEdit }] });
      setExpEdit();
    }
  };

  const handleDelete = (id, arr) => {
    const filtered = resume[arr].filter((item) => item.id !== id);
    if (arr == "education") {
      setResume({ ...resume, education: [...filtered] });
      setEduEdit();
    } else {
      setResume({ ...resume, experience: [...filtered] });
      setExpEdit();
    }
  };

  const handleChange = (e, dataType, keyData) => {
    const { value } = e.target;
    switch (dataType) {
      case "resume":
        setResume({
          ...resume,
          [keyData]: value,
        });
        break;
      case "education":
        setEduEdit({
          ...eduEdit,
          [keyData]: value,
        });
        break;
      case "experience":
        setExpEdit({
          ...expEdit,
          [keyData]: value,
        });
        break;
      default:
        setResume({
          ...resume,
          [keyData]: value,
        });
        break;
    }
  };

  return (
    <div className="app">
      <StoreContext.Provider value={{ resume, setResume }}>
        <Navigation title="MyResume.io" />
        <Editor
          eduEdit={eduEdit}
          expEdit={expEdit}
          handleChange={handleChange}
          handleSave={handleSave}
        />
        <Preview handleDelete={handleDelete} handleEdit={handleEdit} />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
