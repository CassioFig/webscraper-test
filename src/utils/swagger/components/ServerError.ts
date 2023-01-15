import { SwaggerComponent } from "../Types/Component";

export const serverErrorComponent: SwaggerComponent = {
    description: 'Server error',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/errorSchema'
            }
        }
    }
}