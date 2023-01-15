import { SwaggerSchema } from "./Schema"

export type SwaggerContent = {
    [type in ContentTypes]?: {
        schema: SwaggerSchema
    }
}

type ContentTypes = 'application/json' | 'multipart/form-data'