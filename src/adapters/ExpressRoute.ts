import { IController } from "@interfaces/IController";
import { RequestHandler } from "express";

type Adapter = (controller: IController<any, any>) => RequestHandler

export const expressRouteAdapter: Adapter = controller => async (req, res) => {
    const { status, data } = await controller.handle({ ...req.body, ...req.app.locals, ...req.params, ...req.headers, ...req.query });
    res.status(status).json(data);
}