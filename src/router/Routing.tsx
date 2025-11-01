import { Routes, Route } from "react-router-dom";

import MainLayout from "../features/mainLayout/MainLayout";
import HomePage from "../pages/Homepage";
import AnimalDetails from "../pages/AnimalDetails";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="animal/:id" element={<AnimalDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
