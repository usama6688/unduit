import { React } from "react";
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Login from "./components/login/Login";
import Otp from "./components/otp/Otp";
import VerifyAccount from "./components/verifyAccount/VerifyAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/otp" exact element={<Otp />} />
          <Route path="/verify" exact element={<VerifyAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
