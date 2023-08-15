import { Router } from "express";
import { getOrders } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session";

/**
 * Esta ruta solo puede acceder las personas que tienen seccion activa!
 * que tenga un JWT valido!
 */

const orderRouter = Router();

/**
 * http://localhost:3000/ [POST]
 */

orderRouter.get("/order", [checkJwt], getOrders);

export default orderRouter;
