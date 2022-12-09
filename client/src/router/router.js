import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import { HomePage } from "../pages/HomePage.jsx";
import { AboutPage } from "../pages/AboutPage.jsx";
import { ErrorPage } from "../pages/ErrorPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";

import { Layout } from "../layouts/Layout.jsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <HomePage /> } errorElement={ <ErrorPage />}/>
      <Route path="about" element={ <AboutPage /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Route>
  ));