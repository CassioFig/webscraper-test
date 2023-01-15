import { IFindLenovo } from "@interfaces/services";
import { FindLenovo } from "@services/FindLenovo";

export const makeFindLenovo = (): IFindLenovo => {
    return new FindLenovo()
}