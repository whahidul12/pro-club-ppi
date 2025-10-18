import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import LoadingScreen from "../Layouts/LoadingScreen/LoadingScreen";
const Home = lazy(() => import("../Pages/Home/Home"));
const OurStory = lazy(() => import("../Pages/OurStory/OurStory"));
const Activities = lazy(() => import("../Pages/Activities/Activities"));
const Members = lazy(() => import("../Pages/Members/Members"));
const News = lazy(() => import("../Pages/News/News"));
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "our-story",
        // loader: () => fetch("/allData.json"),
        Component: OurStory,
      },
      {
        path: "activities",
        // loader: () => fetch("/allData.json"),
        Component: Activities,
      },
      {
        path: "members",
        // loader: () => fetch("/allData.json"),
        Component: Members,
      },
      {
        path: "news",
        // loader: () => fetch("/allData.json"),
        Component: News,
      },
      {
        path: "contact-us",
        // loader: () => fetch("/allData.json"),
        Component: ContactUs,
      },
    ],
  },
]);

export default Router;
