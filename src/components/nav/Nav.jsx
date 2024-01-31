import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../../pages/Home";
import Book from "../../pages/Book";
import User from "../../pages/User";

const Nav = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="user" element={<User />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}>
        <Navigation />
      </RouterProvider>
    </>
  );
};

export default Nav;
