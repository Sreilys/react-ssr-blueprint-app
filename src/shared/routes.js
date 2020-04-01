import Home from "./home/Home";
import Article from "./articles/Article";

const routes = [
  {
     path: "/",
     exact: true,
     component: Home
  },
  {
    path: "/articles",
    exact: true,
    component: Article
  }
];

export default routes;
