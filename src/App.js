import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import NavigationBar from "./components/Header";
import HomePage from "./components/HomePage";
import ReportSelling from "./components/ReportSelling";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} >
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<><NavigationBar/><Dashboard/></>}>
        </Route>
        <Route path="/homepage" element={<><NavigationBar/><HomePage/></>}>
        </Route>
        <Route path="/reportselling" element={<><NavigationBar/><ReportSelling/></>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;