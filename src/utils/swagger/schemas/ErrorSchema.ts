import { SwaggerSchema } from "../Types";

export const errorSchema: SwaggerSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        message: { type: 'string' },
    }
}