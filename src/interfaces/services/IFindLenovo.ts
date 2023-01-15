import { IService } from "../IService";

export interface IFindLenovo extends IService<IFindLenovo.Input, IFindLenovo.Output> {}

export namespace IFindLenovo {
    export type Input  = any
    export type Output = {
        title             : string
        description       : string
        number_of_reviews : number
        ratings           : number
        price             : number
    }[]
}