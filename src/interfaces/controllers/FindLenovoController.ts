import { IController } from "@interfaces/IController";

export interface IFindLenovoController extends IController<IFindLenovoController.Request, IFindLenovoController.Response> {}

export namespace IFindLenovoController {
    export type Request  = any
    export type Response = {
        title             : string
        description       : string
        number_of_reviews : number
        ratings           : number
        price             : number
    }[] | Error
}