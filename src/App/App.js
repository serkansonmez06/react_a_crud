import { Route, Routes } from "react-router-dom";
import Create from "../Components/Create";
import Read from "../Components/Read";
import Update from "../Components/Update";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
