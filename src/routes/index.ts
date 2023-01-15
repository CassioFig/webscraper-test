import { expressRouteAdapter as adapter } from "@adapters/ExpressRoute";
import { makeFindLenovoController } from "@factories/FindLenovoController";
import { Router } from "express";

export default (router: Router): void => {
    router.get('/v1/lenovo', adapter(makeFindLenovoController()))
}