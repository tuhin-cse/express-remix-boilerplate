import {createRequestHandler} from "@remix-run/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import apiRoutes from "./routes/api";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(compression());

app.disable("x-powered-by");

(async () => {
    app.use("/api", apiRoutes);
    const viteDevServer =
        process.env.NODE_ENV === "production"
            ? undefined
            : await import("vite").then((vite) =>
                vite.createServer({
                    server: {middlewareMode: true},
                })
            );
    if (viteDevServer) {
        app.use(viteDevServer.middlewares);
    } else {
        app.use(
            "/assets",
            express.static("build/client/assets", {immutable: true, maxAge: "1y"})
        );
    }

    // @ts-ignore
    let serverBuild = viteDevServer ? null : await import("./index.js");
    const remixHandler = createRequestHandler({
        build: viteDevServer
            ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
            : serverBuild,
    });
    app.all("*", remixHandler);
    app.listen(PORT, () => {
        console.log(`App listening on port http://localhost:${PORT}`);
    });
})();


