import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action, orginals } from "./urls";



// CREATING FOOD APP

const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title = 'Netflix Orginals'/>
      <RowPost url={action} title ='Action' isSmall />
    </>
  );
};

const appRouter = createBrowserRouter([

  {
    path :"/",
    element : <AppLayout/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
