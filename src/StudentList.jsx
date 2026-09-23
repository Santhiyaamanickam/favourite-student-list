import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentList() {
  const { addToFavourite } = useContext(StudentContext);

  const students = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Karthik" },
    { id: 4, name: "Divya" },
    { id: 5, name: "Rahul" },
  ];

  return (
    <div className="student-container">
      <h2>Student List</h2>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h3>{student.name}</h3>
          <p>Roll No: {student.id}</p>

          <button onClick={() => addToFavourite(student)}>
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;