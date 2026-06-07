import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
