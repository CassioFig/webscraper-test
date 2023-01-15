import { IFindLenovoController } from "@interfaces/controllers"
import { IFindLenovo } from "@interfaces/services";
import { HttpResponse } from "@types_/web";
import { ok, serverError } from "@utils/helpers";

export class FindLenovoController implements IFindLenovoController {
    constructor(
        private readonly findLenovo: IFindLenovo
    ) {}

    async handle(): Promise<HttpResponse<IFindLenovoController.Response>> {
        try {
            const products = await this.findLenovo.execute();
            return ok(products)
        } catch (error) {
           return serverError(error) 
        }
    }
}