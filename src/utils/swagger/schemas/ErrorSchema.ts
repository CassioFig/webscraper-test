import { SwaggerSchema } from "../types";

export const errorSchema: SwaggerSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        message: { type: 'string' },
    }
}