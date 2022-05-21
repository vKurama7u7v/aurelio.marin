import { lazy } from "react";

const Profile = lazy(() => import("../screens/app/Profile/Profile.jsx"));
const Portfolio = lazy(() => import("../screens/app/Portfolio/Portfolio.jsx"));
const Contact = lazy(() => import("../screens/app/Contact/Contact.jsx"));

const Error404 = lazy(() =>
  import("../screens/components/Error404/Error404.jsx")
);

const routes = [
  { path: "/index", component: Profile, exact: true },
  { path: "/portfolio", component: Portfolio, exact: true },
  // { path: "/contact", component: Contact, exact: true },

  { component: Error404 },
];

export default routes;
