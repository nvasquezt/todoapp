import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NavBar from "../NavBar";
import { HOME_ROUTE, CREATE_ROUTE, UPDATE_ROUTE, DELETE_ROUTE } from '../Constants/Routes';
import CreatePerson from "../../pages/CreatePerson";
import UpdatePerson from "../../pages/UpdatePerson";
import DeletePerson from "../../pages/DeletePerson";
const Mainrouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= {HOME_ROUTE} element={<Home />} />
        <Route path={CREATE_ROUTE} element={<CreatePerson />} />
        <Route path={UPDATE_ROUTE} element={<UpdatePerson />} />
        <Route path={DELETE_ROUTE} element={<DeletePerson />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainrouter;
