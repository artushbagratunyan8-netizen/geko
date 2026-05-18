import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name === "") return;

    setStudents([...students, name]);
    setName("");
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Student App</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addStudent}>Add</button>

      {students.map((student, index) => (
        <div key={index}>
          {student}
          <button onClick={() => deleteStudent(index)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default App;