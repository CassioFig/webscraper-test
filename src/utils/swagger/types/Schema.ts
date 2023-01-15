export type SwaggerSchema = { $ref: string } | {
    type        : 'array' | 'object'
    items?      : SwaggerSchema,
    properties? : Property,
    required?   : string[]
}

type Property = {
    [K in keyof any]: {
        type?        : 'string' | 'array' | 'object' | 'number' | 'boolean'
        description? : string
        properties?  : Property
        enum?        : string[],
        format?      : 'date-time' | 'binary',
        items?       : { type: 'string' } | SwaggerSchema,
        $ref?        : string
    }
}