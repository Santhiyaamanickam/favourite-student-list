import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StudentList from "./StudentList";
import FavouriteStudents from "./FavouriteStudents";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<FavouriteStudents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;