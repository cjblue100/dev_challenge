import './App.css';
import Authentication from './components/authentication';
import {
  Routes,
  Route
} from "react-router-dom";
import {Department}  from './components/department';
import Employee from './components/employee';
function App() {
  return (
   
      <div className="App">
        <h3 className="m-3 d-flex justify-content-center">Dev Challenge</h3>
        <Authentication/>
       <Routes>
          <Route path="/department" element={<Department />} exact></Route>
          <Route path="/employee" element={<Employee />}  exact></Route>
       </Routes>
      </div>
    
  );
}

export default App;
