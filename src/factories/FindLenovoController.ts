import { FindLenovoController } from "@controllers/FindLenovoController";
import { IFindLenovoController } from "@interfaces/controllers";
import { makeFindLenovo } from "./FindLenovo";

export const makeFindLenovoController = (): IFindLenovoController => {
    return new FindLenovoController(makeFindLenovo());
}