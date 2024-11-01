import {Router} from "express";
import {getHelloMiddleware} from "../middlewares/hello";
import {getHello} from "../controller/hello";

const apiRoutes = Router();


apiRoutes.get('/hello', getHelloMiddleware, getHello);

export default apiRoutes;