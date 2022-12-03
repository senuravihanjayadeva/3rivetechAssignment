import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DepartmentComponent, EmployeeComponent } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DepartmentComponent />} />
        <Route path="/employee" element={<EmployeeComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
