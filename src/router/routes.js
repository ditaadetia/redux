import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../layout";

const routes = (
  <Routes className="body">
    <Route path="/" element={<Login />} />
    <Route path="/beranda" element={<Layout />} />
  </Routes>
);

export default routes;
