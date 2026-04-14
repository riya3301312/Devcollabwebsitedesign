import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import Discussions from "./pages/Discussions";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "create-project", Component: CreateProject },
      { path: "discussions", Component: Discussions },
      { path: "profile", Component: Profile },
    ],
  },
]);
