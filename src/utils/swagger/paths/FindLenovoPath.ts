import { SwaggerPath } from "../types";

export const findLenovoPath: SwaggerPath ={ 
    get: {
        tags        : ["Products"],
        summary     : "Find Lenovo Products",
        description : "Find Lenovo Products info ordered by price",
        responses   : {
            200: {
                description: "Success",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/schemas/product"
                            }
                        }
                    }
                }
            },
            500: { $ref: "#/components/serverError" }
        }
    }
}