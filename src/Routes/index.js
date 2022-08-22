import React from "react";
import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";
import CreateNews from '../Pages/CreateNews'
import Home from "../Pages/Home";
import CreateCategory from '../Pages/CreateCategory'

  function Routes() {
    return (

    <BrowserRouter>
      <RoutesDOM>
        <Route element = { <Home/> }  path="/" exact/>
        <Route element = { <CreateNews/> }  path="/createNews" exact/>
        <Route element = { <CreateNews/> }  path="/editNews/:id" exact/>
        <Route element = { <CreateCategory/> }  path="/createCategory" exact/>
      </RoutesDOM>

    </BrowserRouter>
    );
  }
  
  export default Routes;