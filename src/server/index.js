import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import App from "../shared/App";
import sourceMapSupport from "source-map-support";

if (process.env.NODE_ENV === "development") {
  sourceMapSupport.install();
}

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/articles", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Article One",
      author: "Jasmine",
      date: new Date(Date.now() - 15000000),
      upvotes: 21,
    },
    {
      id: 2,
      title: "Article Two",
      author: "Carla",
      date: new Date(Date.now() - 16000000),
      upvotes: 10,
    },
    {
      id: 3,
      title: "Article Three",
      author: "Patricia",
      date: new Date(Date.now() - 14000000),
      upvotes: 5,
    },
    {
      id: 4,
      title: "Article Four",
      author: "Susan",
      date: new Date(Date.now() - 12000000),
      upvotes: 77,
    }
  ]);
});

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route));

  const requestInitialData =
    activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

  Promise.resolve(requestInitialData)
    .then(initialData => {
      console.log('initialData', initialData);
      const context = { initialData };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR React</title>
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
