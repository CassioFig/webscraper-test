import { SwaggerSchema } from "../types";

export const productSchema: SwaggerSchema = {
    type: 'object',
    properties: {
        title: { 
            type: 'string',
            description: 'Product title'
        },
        description: {
            type: 'string',
            description: 'Product description'
        },
        number_of_reviews: {
            type: 'number',
            description: 'Number of reviews for the product'
        },
        ratings: {
            type: 'number',
            description: 'Ratings for the product'
        },
        price: {
            type: 'number',
            description: 'Price for the product'
        }
    }
}