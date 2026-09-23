import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function FavouriteStudents() {
  const { favourites, removeFromFavourite } = useContext(StudentContext);

  return (
    <div className="student-container">
      <h2>Favourite Students</h2>

      {favourites.length === 0 ? (
        <p>No favourite students added yet</p>
      ) : (
        favourites.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>
            <p>Roll No: {student.id}</p>

            <button
              className="remove-btn"
              onClick={() => removeFromFavourite(student.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;